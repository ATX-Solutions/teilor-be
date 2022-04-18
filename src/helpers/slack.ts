import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

export const sendSlackNotification = async (text: string, payload?: any) => {
    if (!process.env.SLACK_HOOK) {
        console.warn('Slack hook not available!');
        return;
    }

    const blocks = [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `<@U3Y64F6HZ> ${text}`,
            },
        },
    ];

    if (payload) {
        blocks.push({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: '```' + JSON.stringify(payload) + '```',
            },
        });
    }

    try {
        await axios.post(process.env.SLACK_HOOK, { blocks: JSON.stringify(blocks) });
    } catch (e) {
        console.error(e);
    }
};

export const getStatusCodeEmoji = (statusCode: number) => {
    switch (statusCode) {
        case StatusCodes.OK: {
            return '🟢';
        }
        case StatusCodes.UNAUTHORIZED: {
            return '⛔';
        }
        case StatusCodes.NOT_FOUND:
        case StatusCodes.UNPROCESSABLE_ENTITY: {
            return '🔴';
        }
        case StatusCodes.INTERNAL_SERVER_ERROR: {
            return '🤦';
        }
        default: {
            return '🟡';
        }
    }
};

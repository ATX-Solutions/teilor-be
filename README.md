# NodeJS API

## Authorization:

-   All API endpoints are protected by a token. The token is private and must be provided by the repo author.

## Endpoints:

-   `/api/healthcheck` -> health check endpoint
-   `/api/products/:id` -> returns the information about a product from a thirdparty API and sends an email to a specific user.

## Deployment:

API URL: https://teilor-be.herokuapp.com/

The app has been deployed on heroku.

## Loc de mai bine (mereu este):

Având în vedere că testul a fost simplu și nu cred că a avut rost să-l complic cu alte chestii pe care le consider importante, o să le notez aici.

-   Unul dintre cele mai importante lucruri la un API (la nivel de comunicare mă refer) e consistența cu care răspunde. Aș fi folosit JSON Schema (https://json-schema.org/) sau JSON API (https://jsonapi.org/) pentru a asigura acest aspect.
-   Un swagger ar fi de bun simț pentru documentație.
-   Pentru email-uri ar fi indicat să fi folosit niște template-uri pentru a scăpa de ce am făcut eu cu proprietatea aia `html`.
-   Aș fi ales NestJS (https://nestjs.com/) și nu express "chior" pentru că vine cu o grămadă de chestii out of the box și cu un fel de structură deja in place pe care să o respecți.

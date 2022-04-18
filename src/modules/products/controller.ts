import axios from 'axios';
import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { sendProductEmail } from './helpers';
import { ProductResponse } from './interfaces';
import { sendPredefinedResponse, sendResponse } from '../../helpers/api';

// const data = JSON.parse(
//     `{"statusCode":200,"status":"OK","data":{"success":true,"totalcount":24,"rows":[{"id_magazin":"6104","url_site":"https://www.teilor.ro/magazine/alba-mall-alba","magazin":"Alba-Iulia","adresa":"ALBA IULIA, STR TUDOR VLADIMIRESCU NR 50A,  JUD. A","oras":"Alba-Iulia","regiune":"Vest","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"7102","magazin":"Atrium Mall Arad","adresa":"ARAD, CALEA AUREL VLAICU NR 10-12, JUD ARAD","oras":"Arad","regiune":"Vest","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5104","url_site":"https://www.teilor.ro/magazine/arena-mall-bacau","magazin":"Bacau","adresa":"ARENA MALL, STR. STEFAN CEL MARE, NR.28, BACAU","oras":"Bacau","regiune":"Moldova","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5105","url_site":"https://www.teilor.ro/magazine/braila-mall","magazin":"Braila","adresa":"BRAILA PROMENADA MALL, PRINCIPALA NR 4B, COM. CHIS","oras":"Braila","regiune":"Moldova","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2104","url_site":"https://www.teilor.ro/magazine/afi-cotroceni","magazin":"AFI Exclusive","adresa":"AFI PALACE COTROCENI, BDL. VASILE MILEA, NR.4, SEC","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2103","url_site":"https://www.teilor.ro/magazine/afi-palace-cotroceni","magazin":"AFI Palace Cotroceni","adresa":"AFI PALACE COTROCENI, BDL. VASILE MILEA, NR.4, SEC","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2113","url_site":"https://www.teilor.ro/magazine/park-lake","magazin":"ParkLake Orange","adresa":"CENTRUL COM. PARK LAKE, STR. LIVIU REBREANU, NR.4,","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2108","url_site":"https://www.teilor.ro/magazine/plaza-romania-bucuresti","magazin":"Plaza Romania","adresa":"CENTRUL COM. PLAZA ROMANIA, BDL.TIMISOARA, NR.26,","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2105","url_site":"https://www.teilor.ro/magazine/v","magazin":"Promenada","adresa":"PROMENADA MALL, CALEA FLOREASCA, NR.246B, SECT 1,","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"2110","url_site":"https://www.teilor.ro/magazine/unirea-shopping-city","magazin":"Unirea Shopping Center","adresa":"UNIREA SHOPPING CENTER, PIATA UNIRII, NR.1, SECT 3","oras":"Bucuresti","regiune":"Bucuresti","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"1104","url_site":"https://www.teilor.ro/magazine/aurora-mall-buzau","magazin":"Buzau Mall","adresa":"Buzau","oras":"Buzau","regiune":"Sud","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"6103","url_site":"https://www.teilor.ro/magazine/teilor-vivo-cluj-napoca","magazin":"Vivo Cluj","adresa":"POLUS CENTER CLUJ, DN1,E60, STR. AVRAM IANCU, NR.4","oras":"Cluj","regiune":"Vest","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"3101","url_site":"https://www.teilor.ro/magazine/teilor-craiova","magazin":"Craiova Mall Electroputere","adresa":"ELECTROPUTERE PARC CRAIOVA, STR. CALEA BUCURESTI,","oras":"Craiova","regiune":"Sud","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5106","url_site":"https://www.teilor.ro/magazine/teilor-galati","magazin":"Galati","adresa":"SHOPPING CITY GALATI, STR. GEORGE COSBUC, NR.251,","oras":"Galati","regiune":"Moldova","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5102","url_site":"https://www.teilor.ro/magazine/teilor-iasi","magazin":"Exclusive IASI","adresa":"PALAS SHOPPING MALL, STR. PALAS, NR.7A, CLADIREA C","oras":"Iasi","regiune":"Moldova","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5101","url_site":"https://www.teilor.ro/magazine/palas-iasi","magazin":"Palas Iasi","adresa":"STR. PALAS, NR.7A, CLADIREA A5 A CENTRULUI COMERCI","oras":"Iasi","regiune":"Moldova","CodProdus":"54270","Stoc":"2","stocrezComFurnizori":"0"},{"id_magazin":"6107","magazin":"Sibiu Festival","oras":"Sibiu","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"6105","url_site":"https://www.teilor.ro/magazine/sibiu-shopping-city","magazin":"Sibiu Shopping City","adresa":"SELIMBAR, SOSEAUA SIBIULUI NR 5, JUDETUL SIBIU","oras":"Sibiu","regiune":"Sud","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"5103","url_site":"https://www.teilor.ro/magazine/teilor-suceava","magazin":"Suceava","adresa":"IULIUS MALL SUCEAVA, CALEA UNIRII, NR.22, SUCEAVA","oras":"Suceava","regiune":"Moldova","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"1208","magazin":"Targoviste Mall","oras":"Targoviste","CodProdus":"54270","Stoc":"2","stocrezComFurnizori":"0"},{"id_magazin":"3103","url_site":"https://www.teilor.ro/magazine/targu-jiu-shopping-city","magazin":"Tg.Jiu","adresa":"TG. JIU SHOPPING CITY, STR. TERMOCENTRALEI, NR.10,","oras":"Targu Jiu","regiune":"Vest","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"7103","magazin":"Iulius Mall Timisoara","adresa":"Timisoara","oras":"Timisoara","regiune":"Timisoara","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"7104","url_site":"https://www.teilor.ro/magazine/teilor-exclusive-iulius-timisoara","magazin":"Timisoara Exclusive","adresa":"Aristide Demetriade 1","oras":"Timisoara","regiune":"Timisoara","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"},{"id_magazin":"7101","url_site":"https://www.teilor.ro/magazine/shopping-city-timisoara","magazin":"Timisoara Mall","adresa":"SHOPPING CITY TIMISOARA, STR. CALEA SAGULUI, 100,","oras":"Timisoara","regiune":"Vest","CodProdus":"54270","Stoc":"1","stocrezComFurnizori":"0"}]},"error":null}`,
// );

export const findById = async (req: Request, res: Response) => {
    // demo purpose
    if (req.params.id !== '54270') {
        return sendPredefinedResponse(res, StatusCodes.NOT_FOUND);
    }

    if (!req.query.email) {
        return sendPredefinedResponse(res, StatusCodes.UNPROCESSABLE_ENTITY);
    }

    console.log(req.params.id); // 54270

    // sendProductEmail(data.data, req.params.id, req.query.email as string);
    // return res.status(StatusCodes.OK).json(data);

    try {
        const { data } = await axios.get<ProductResponse>(
            `https://smeurei.teilor.ro/service/stoc_magazin?cod_produs=${req.params.id}`,
        );

        // async "missed" on purpose. the email can be send after the response is returned.
        sendProductEmail(data, req.params.id, req.query.email as string);

        return sendResponse({ res, body: { statusCode: StatusCodes.OK, status: ReasonPhrases.OK, data, error: null } });
    } catch (e) {
        console.error(e.toJSON());
        return sendPredefinedResponse(res, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

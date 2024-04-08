/*
* File: studentService.js
* Author: Gyüre Árpád
* Copyright: 2024, Gyüre Árpád
* Group: Szoft II-1-E
* Date: 2024-04-08
* Github: https://github.com/RP2022K/tanulok.git
* Licenc: GNU GPL
*/

const host = 'http://localhost:8000/';
const endpoint = 'students';

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
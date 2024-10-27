/* 
    Different other functions needed by the automation tests
*/

export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
}

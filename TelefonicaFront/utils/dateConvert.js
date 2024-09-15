export function dateConvert(fecha) {
    // 2024-10-16 -> 16/10/2024
    const partesFecha = fecha.split("-");
    return partesFecha[2] + "/" + partesFecha[1] + "/" + partesFecha[0];
}

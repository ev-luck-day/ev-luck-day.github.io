function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "beevakum.net",
    "resubscribeOnInstall": true,
    "zoneId": 8060728,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://beevakum.net/act/files/sw.perm.check.min.js?r=sw');

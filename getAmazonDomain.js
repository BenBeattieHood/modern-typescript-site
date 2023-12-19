const mapping = {
ca: [
"America/St_Johns",
"America/Halifax",
"America/Glace_Bay",
"America/Moncton",
"America/Goose_Bay",
"America/Toronto",
"America/Nipigon",
"America/Thunder_Bay",
"America/Iqaluit",
"America/Pangnirtung",
"America/Winnipeg",
"America/Rainy_River",
"America/Resolute",
"America/Rankin_Inlet",
"America/Regina",
"America/Swift_Current",
"America/Edmonton",
"America/Cambridge_Bay",
"America/Yellowknife",
"America/Inuvik",
"America/Dawson_Creek",
"America/Fort_Nelson",
"America/Whitehorse",
"America/Dawson",
"America/Vancouver",
"America/Blanc-Sablon",
"America/Atikokan",
"America/Creston",
],
cn: [
"Asia/Shanghai",
"Asia/Urumqi",
],
jp: [
"Asia/Tokyo",
],
'com.au': [
"Australia/Lord_Howe",
"Antarctica/Macquarie",
"Australia/Hobart",
"Australia/Melbourne",
"Australia/Sydney",
"Australia/Broken_Hill",
"Australia/Brisbane",
"Australia/Lindeman",
"Australia/Adelaide",
"Australia/Darwin",
"Australia/Perth",
"Australia/Eucla",
],
uk: [
"Europe/London",
],
de: [
"Europe/Berlin",
"Europe/Busingen",
],
es: [
"Europe/Madrid",
"Africa/Ceuta",
"Atlantic/Canary",
],
fr: [
"Europe/Paris",
],
in: [
"Asia/Kolkata",
"Asia/Calcutta",
],
it: [
"Europe/Rome",
],
nl: [
"Europe/Amsterdam",
],
sa: [
"Asia/Riyadh",
]
}
function getAmazonDomain() {
    if (Intl) {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tld = Object.entries(mapping).find(([d, zones]) => zones.includes(userTimeZone) ? true : false)?.[0]
        return tld ?? 'com'
    }
}
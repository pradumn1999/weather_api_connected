let dt= 1715852623;
const curDate = new Date(dt * 1000); //convert second to milisecond

console.log(curDate);

const option = {
    weekday : "long",
    year :"numeric",
    month : "long",
    day : "numeric",
    houre : "numeric",
    minute : "numeric"
}

const formatter = new Intl.DateTimeFormat("en-US", option);

const formattedDate = formatter.format(curDate);

return formattedDate;


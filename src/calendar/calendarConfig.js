import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "95787959005-e9fi56g3uv8oa4a02dq68i44mta4ed6v.apps.googleusercontent.com",
  apiKey: "AIzaSyCFtBTqIKnyU5Hay8mMSxkreqxIjDS8RRY",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};
//PZ%XwJ,Ci{
const apiCalendar = new ApiCalendar(config);

/* apiCalendar.handleAuthClick();

if (apiCalendar.sign) {
    console.log("Usuário autenticado");
    // Agora você pode acessar o token usando apiCalendar.getToken()
    const token = apiCalendar.getToken();
    console.log("Token de autenticação:", token);
  } else {
    console.log("Usuário não autenticado");
  } */

export { apiCalendar };

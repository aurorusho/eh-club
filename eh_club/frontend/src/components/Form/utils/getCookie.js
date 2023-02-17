// Returns null if there are no cookies
const getCookie = (cookieName) => {
    // Check if there are cookies 
    if (!document.cookie || document.cookie === '') return null
    
    // Split all the different cookies
    const cookieArray = document.cookie.split(';');
    
    for (let cookie of cookieArray) {
        cookie = cookie.split('=');
        if (cookie[0] === cookieName){
            return cookie[1];
        }
    }
    return null;
};
export {getCookie};
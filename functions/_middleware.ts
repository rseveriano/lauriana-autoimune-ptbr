interface EventContext {
    request: Request;
    next: () => Promise<Response>;
}

export const onRequest = async (context: EventContext) => {
    const request = context.request;
    const url = new URL(request.url);

    if (url.pathname !== "/") {
        return context.next();
    }

    const acceptLanguage = request.headers.get("Accept-Language");

    let targetLang = "pt";

    if (acceptLanguage) {
        if (acceptLanguage.includes("pt")) {
            targetLang = "pt";
        } else if (acceptLanguage.includes("es")) {
            targetLang = "es";
        } else if (acceptLanguage.includes("en")) {
            targetLang = "en";
        }
    }

    return Response.redirect(`${url.origin}/${targetLang}/`, 302);
};

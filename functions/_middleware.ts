interface EventContext {
    request: Request;
    next: () => Promise<Response>;
}

export const onRequest = async (context: EventContext) => {
    const request = context.request;
    const url = new URL(request.url);

    // Only redirect root requests
    if (url.pathname !== "/") {
        return context.next();
    }

    const acceptLanguage = request.headers.get("Accept-Language");

    // Default to PT if no header or no match
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

    // If target is PT, we stay at / (assuming / is PT content based on your structure)
    // If target is EN or ES, we redirect
    if (targetLang === "pt") {
        return context.next();
    }

    return Response.redirect(`${url.origin}/${targetLang}/`, 302);
};

interface EventContext {
    request: Request;
    next: () => Promise<Response>;
}

export const onRequest = async (context: EventContext) => {
    const request = context.request;
    const url = new URL(request.url);

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

    if (url.pathname === "/") {
        return Response.redirect(`${url.origin}/${targetLang}/`, 302);
    }

    if (url.pathname === "/ai" || url.pathname === "/ai/") {
        return Response.redirect(`${url.origin}/ai/${targetLang}`, 302);
    }

    return context.next();
};

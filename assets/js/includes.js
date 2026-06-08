async function include(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        el.innerHTML = await res.text();
    } catch (err) {
        console.error(`Could not load ${url}:`, err);
    }
}

include('#site-header', '/partials/header.html');
include('#site-footer', '/partials/footer.html');
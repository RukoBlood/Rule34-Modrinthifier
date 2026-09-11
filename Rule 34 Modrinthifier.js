
// ==UserScript==
// @name         Rule34.xxx — Modern UI
// @namespace    https://rule34.xxx/
// @version      3.6.2
// @description  Modernize Rule34.xxx interface
// @author       You
// @match        https://rule34.xxx/*
// @match        https://www.rule34.xxx/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    if (window.__R34_MODERN_UI__) return;
    window.__R34_MODERN_UI__ = true;

    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const section = params.get('s');

    const isHomePage = !page && (
        window.location.pathname === '/' ||
        window.location.pathname === '/index.php'
    );

    const isPostPage =
        page === 'post' &&
        (section === 'list' || section === 'view');

    const isPostListPage =
        page === 'post' &&
        section === 'list';

    const isPostViewPage =
        page === 'post' &&
        section === 'view';

    const html = document.documentElement;

    html.classList.add('r34-modern');

    if (isHomePage)
        html.classList.add('r34-home');

    if (isPostPage)
        html.classList.add('r34-post-page');

    if (isPostListPage)
        html.classList.add('r34-post-list');

    if (isPostViewPage)
        html.classList.add('r34-post-view');


    /* =========================================================
       LOAD INTER
       ========================================================= */

    function loadInter() {

        if (!document.head) {
            setTimeout(loadInter, 10);
            return;
        }

        if (
            document.getElementById(
                'r34-modern-inter'
            )
        ) {
            return;
        }

        const link =
            document.createElement('link');

        link.id =
            'r34-modern-inter';

        link.rel =
            'stylesheet';

        link.href =
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';

        document.head.appendChild(link);
    }

    loadInter();


    /* =========================================================
       CSS
       ========================================================= */

    GM_addStyle(`

        /* =====================================================
           GLOBAL
           ===================================================== */

        html.r34-modern {
            background:#0b0d10 !important;
        }

        html.r34-modern body {
            background:#0b0d10 !important;
            color:#c9cdd3 !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:16px !important;
            line-height:1.5 !important;
        }

        html.r34-modern,
        html.r34-modern body,
        html.r34-modern body * {
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
        }


        /* =====================================================
           LINKS
           ===================================================== */

        html.r34-modern a,
        html.r34-modern a:visited {
            color:#aeb4bd;
        }

        html.r34-modern a:hover {
            color:#e0e4e9;
        }


        /* =====================================================
           SITE TITLE
           ===================================================== */

        html.r34-modern .site-title,
        html.r34-modern .site-title a,
        html.r34-modern a.site-title {
            background:linear-gradient(
                135deg,
                #86efac 0%,
                #22c55e 45%,
                #15803d 100%
            ) !important;

            background-clip:text !important;
            -webkit-background-clip:text !important;
            color:transparent !important;
            -webkit-text-fill-color:transparent !important;
            text-decoration:none !important;
        }

        html.r34-modern .site-title a:hover,
        html.r34-modern a.site-title:hover {
            background:linear-gradient(
                135deg,
                #bbf7d0 0%,
                #4ade80 45%,
                #16a34a 100%
            ) !important;

            background-clip:text !important;
            -webkit-background-clip:text !important;
            color:transparent !important;
            -webkit-text-fill-color:transparent !important;
        }


        /* =====================================================
           TOP NAVBAR
           ===================================================== */

        html.r34-modern .r34-topnav-link,
        html.r34-modern .r34-topnav-link:visited,
        html.r34-modern .r34-topnav-link:hover,
        html.r34-modern .r34-topnav-link:active {
            color:#8e949d !important;
            background:transparent !important;
            background-color:transparent !important;
            border:none !important;
            box-shadow:none !important;
            text-decoration:none !important;
        }

        html.r34-modern .r34-topnav-link:hover {
            color:#d0d5dc !important;
        }

        html.r34-modern .r34-topnav-item,
        html.r34-modern .r34-topnav-item:hover,
        html.r34-modern .r34-topnav-item:active,
        html.r34-modern .r34-topnav-item.current,
        html.r34-modern .r34-topnav-item.active,
        html.r34-modern .r34-topnav-item.selected,
        html.r34-modern .r34-topnav-item.current-page {
            background:transparent !important;
            border:none !important;
            box-shadow:none !important;
        }


        /* =====================================================
           SUBNAVBAR
           ===================================================== */

        html.r34-modern #subnavbar,
        html.r34-modern ul#subnavbar {
            background:#111419 !important;
            background-color:#111419 !important;
            background-image:none !important;
            border:none !important;
            box-shadow:none !important;
            color:#8e949d !important;
        }

        html.r34-modern #subnavbar li,
        html.r34-modern ul#subnavbar li {
            background:transparent !important;
            color:#8e949d !important;
        }

        html.r34-modern #subnavbar li a,
        html.r34-modern ul#subnavbar li a,
        html.r34-modern #subnavbar li a:visited,
        html.r34-modern ul#subnavbar li a:visited {
            color:#8e949d !important;
            background:transparent !important;
            border:none !important;
            box-shadow:none !important;
            text-decoration:none !important;
        }

        html.r34-modern #subnavbar li a:hover,
        html.r34-modern ul#subnavbar li a:hover {
            color:#d2d6dc !important;
        }

        html.r34-modern #subnavbar li.current-page,
        html.r34-modern #subnavbar li.active,
        html.r34-modern #subnavbar li.selected,
        html.r34-modern #subnavbar li.current,
        html.r34-modern ul#subnavbar li.current-page,
        html.r34-modern ul#subnavbar li.active,
        html.r34-modern ul#subnavbar li.selected,
        html.r34-modern ul#subnavbar li.current {
            background:transparent !important;
            color:#c5cad1 !important;
        }


        /* =====================================================
           NAV LINKS CONTAINER
           ===================================================== */

        html.r34-modern #navlinksContainer {
            box-sizing:border-box !important;
            background:#111419 !important;
            background-color:#111419 !important;
            background-image:none !important;
            color:#c9cdd3 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.04),
                0 0 14px rgba(34,197,94,.18),
                0 0 32px rgba(34,197,94,.08),
                inset 0 1px 0 rgba(255,255,255,.025) !important;

            overflow:hidden !important;
        }

        html.r34-modern #navlinksContainer a,
        html.r34-modern #navlinksContainer a:visited {
            color:#8e949d !important;
            text-decoration:none !important;
        }

        html.r34-modern #navlinksContainer a:hover {
            color:#d0d5dc !important;
        }


        /* =====================================================
           STATUS NOTICE
           ===================================================== */

        html.r34-modern div.status-notice {
            box-sizing:border-box !important;
            width:100% !important;
            margin:14px 0 !important;
            padding:14px 18px !important;

            background:linear-gradient(
                135deg,
                #142018,
                #13251a,
                #102116
            ) !important;

            color:#cfe8d5 !important;
            border:1px solid #234c30 !important;
            border-radius:12px !important;

            box-shadow:
                0 4px 16px rgba(0,0,0,.18),
                inset 0 1px 0 rgba(255,255,255,.025) !important;

            font-size:15px !important;
        }


        /* =====================================================
           HOME
           ===================================================== */

        html.r34-home #static-index {
            min-height:100vh !important;
            box-sizing:border-box !important;
            display:flex !important;
            flex-direction:column !important;
        }

        html.r34-home #static-index p.index-header {
            padding-top:30px !important;
            margin-bottom:18px !important;
        }

        html.r34-home #static-index p.index-header img {
            width:420px !important;
            max-width:65vw !important;
            height:auto !important;
        }


        /* =====================================================
           HOME SEARCH FORM
           ===================================================== */

        html.r34-home #static-index form {
            display:flex !important;
            flex-direction:column !important;
            align-items:center !important;
            justify-content:flex-start !important;
            width:100% !important;
            box-sizing:border-box !important;
        }

        html.r34-home #static-index form .awesomplete {
            display:block !important;
            position:relative !important;
            width:min(520px,60vw) !important;
            max-width:90vw !important;
            margin:0 auto !important;
            box-sizing:border-box !important;
            z-index:50 !important;
        }


        /* =====================================================
           HOME SEARCH INPUT
           ===================================================== */

        html.r34-home
        #static-index
        form
        input[type="text"],

        html.r34-home
        #static-index
        form
        input[type="search"] {
            display:block !important;
            width:100% !important;
            min-width:0 !important;
            height:60px !important;
            padding:0 20px !important;
            margin:0 !important;
            box-sizing:border-box !important;

            background:#15181d !important;
            background-color:#15181d !important;
            background-image:none !important;

            color:#e3e6eb !important;

            border:1px solid #292e36 !important;
            border-radius:14px !important;

            outline:none !important;

            font-size:17px !important;
            line-height:1.2 !important;

            box-shadow:
                inset 0 1px 0 rgba(255,255,255,.02) !important;
        }

        html.r34-home
        #static-index
        form
        input[type="text"]:focus,

        html.r34-home
        #static-index
        form
        input[type="search"]:focus {
            background:#181b21 !important;
            border-color:#4a5360 !important;
            box-shadow:
                0 0 0 3px rgba(255,255,255,.04) !important;
        }


        /* =====================================================
           SEARCH BUTTON
           ===================================================== */

        html.r34-modern
        input[type="submit"].r34-search-button {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            box-sizing:border-box !important;

            width:180px !important;
            min-width:180px !important;

            height:60px !important;
            min-height:60px !important;

            padding:0 34px !important;
            margin:0 !important;

            border:none !important;
            border-radius:9999px !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a,
                    #15803d
                ) !important;

            background-color:#16a34a !important;

            color:#fff !important;

            font-size:17px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-align:center !important;

            cursor:pointer !important;

            appearance:none !important;
            -webkit-appearance:none !important;

            position:relative !important;
            z-index:auto !important;

            box-shadow:
                0 5px 18px rgba(22,163,74,.24) !important;

            transition:
                transform .15s ease,
                box-shadow .15s ease,
                filter .15s ease !important;
        }

        html.r34-modern
        input[type="submit"].r34-search-button:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;

            box-shadow:
                0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-modern
        input[type="submit"].r34-search-button:active {
            transform:translateY(0) scale(.98) !important;
        }


        /* =====================================================
           HOME BUTTON SPACING
           ===================================================== */

        html.r34-home
        #static-index
        form
        input[type="submit"].r34-search-button {
            margin-top:14px !important;
            margin-bottom:14px !important;
            margin-left:0 !important;
            margin-right:0 !important;
            align-self:center !important;
        }


        /* =====================================================
           HOME DROPDOWN

           Используется штатная модель Awesomplete:
           dropdown находится внутри .awesomplete.

           Никакого JS-позиционирования.
           ===================================================== */

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul {
            position:absolute !important;

            top:calc(100% + 8px) !important;
            left:50% !important;

            right:auto !important;
            bottom:auto !important;

            transform:translateX(-50%) !important;
            transform-origin:top center !important;

            width:420px !important;
            min-width:0 !important;
            max-width:min(420px,90vw) !important;

            max-height:300px !important;

            margin:0 !important;
            padding:6px !important;

            box-sizing:border-box !important;

            background:#111419 !important;
            background-color:#111419 !important;
            background-image:none !important;

            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.04),
                0 0 18px rgba(34,197,94,.16),
                0 10px 28px rgba(0,0,0,.38) !important;

            overflow-x:hidden !important;
            overflow-y:auto !important;

            z-index:99999 !important;
        }

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul[hidden],

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul:empty {
            display:none !important;
        }


        /* =====================================================
           HOME DROPDOWN ITEMS
           ===================================================== */

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul
        > li {
            display:block !important;
            box-sizing:border-box !important;
            width:100% !important;

            margin:0 0 3px !important;
            padding:9px 11px !important;

            background:#15181d !important;
            color:#c9cdd3 !important;

            border:1px solid transparent !important;
            border-radius:8px !important;

            font-size:13px !important;
            font-weight:500 !important;
            line-height:1.3 !important;

            cursor:pointer !important;
        }

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul
        > li:hover,

        html.r34-home
        #static-index
        form
        .awesomplete
        > ul
        > li[aria-selected="true"] {
            background:#17251c !important;
            color:#e8f5eb !important;
            border-color:#2f7942 !important;
            box-shadow:inset 3px 0 0 #22c55e !important;
        }


        /* =====================================================
           HOME LINKS
           ===================================================== */

        html.r34-home
        #static-index
        > #links {
            order:9999 !important;
            margin-top:auto !important;
            margin-bottom:20px !important;
            padding-top:24px !important;
            text-align:center !important;
        }

        html.r34-home #links a,
        html.r34-home #links a:visited {
            color:#8e949d !important;
            text-decoration:none !important;
            margin:0 9px !important;
            font-size:15px !important;
            font-weight:500 !important;
        }

        html.r34-home #links a:hover {
            color:#c5cad1 !important;
        }


        /* =====================================================
           AUTOCOMPLETE COMMON
           ===================================================== */

        html.r34-modern
        .awesomplete
        > ul::-webkit-scrollbar {
            width:8px !important;
        }

        html.r34-modern
        .awesomplete
        > ul::-webkit-scrollbar-track {
            background:#111419 !important;
            border-radius:8px !important;
        }

        html.r34-modern
        .awesomplete
        > ul::-webkit-scrollbar-thumb {
            background:#246737 !important;
            border-radius:8px !important;
            border:2px solid #111419 !important;
        }

        html.r34-modern
        .awesomplete
        > ul::before {
            display:none !important;
        }

        html.r34-modern
        .awesomplete
        mark {
            background:rgba(34,197,94,.18) !important;
            color:#9df2b1 !important;
            border-radius:4px !important;
            padding:1px 3px !important;
            font-weight:700 !important;
        }


        /* =====================================================
           POST PAGE
           ===================================================== */

        html.r34-post-page #content {
            position:relative !important;
            clear:both !important;
            box-sizing:border-box !important;
            color:#c9cdd3 !important;
        }

        html.r34-post-list
        form.r34-main-search,

        html.r34-post-view
        form.r34-main-search {
            position:static !important;
            clear:both !important;

            display:flex !important;
            flex-direction:row !important;
            flex-wrap:wrap !important;

            align-items:center !important;
            justify-content:center !important;

            gap:12px !important;

            width:100% !important;

            margin:
                12px 0 24px !important;

            padding:0 !important;

            box-sizing:border-box !important;
        }

        html.r34-post-list
        form.r34-main-search
        .awesomplete,

        html.r34-post-view
        form.r34-main-search
        .awesomplete {
            display:inline-block !important;

            width:min(520px,55vw) !important;
            max-width:520px !important;
            min-width:0 !important;

            margin:0 !important;

            box-sizing:border-box !important;
            vertical-align:middle !important;
        }

        html.r34-post-list
        form.r34-main-search
        input[name="tags"],

        html.r34-post-view
        form.r34-main-search
        input[name="tags"] {
            display:block !important;

            width:100% !important;
            min-width:0 !important;
            max-width:520px !important;

            height:60px !important;

            padding:0 20px !important;
            margin:0 !important;

            box-sizing:border-box !important;

            background:#15181d !important;
            color:#e3e6eb !important;

            border:1px solid #303640 !important;
            border-radius:14px !important;

            outline:none !important;

            font-size:17px !important;
        }


        /* =====================================================
           POST DROPDOWN
           ===================================================== */

        html.r34-post-list
        form.r34-main-search
        .awesomplete
        > ul,

        html.r34-post-view
        form.r34-main-search
        .awesomplete
        > ul {
            width:360px !important;
            min-width:360px !important;
            max-width:360px !important;

            max-height:300px !important;

            margin:8px 0 0 !important;
            padding:6px !important;

            box-sizing:border-box !important;

            overflow-x:hidden !important;
            overflow-y:auto !important;

            background:#111419 !important;
            background-color:#111419 !important;
            background-image:none !important;

            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.04),
                0 0 16px rgba(34,197,94,.14),
                0 10px 24px rgba(0,0,0,.38) !important;

            z-index:99999 !important;
        }

        html.r34-post-list
        form.r34-main-search
        .awesomplete
        > ul
        > li,

        html.r34-post-view
        form.r34-main-search
        .awesomplete
        > ul
        > li {
            box-sizing:border-box !important;
            width:100% !important;

            margin:0 0 3px !important;
            padding:9px 11px !important;

            background:#15181d !important;
            color:#c9cdd3 !important;

            border:1px solid transparent !important;
            border-radius:8px !important;

            font-size:13px !important;
            font-weight:500 !important;
            line-height:1.3 !important;

            cursor:pointer !important;
        }

        html.r34-post-list
        form.r34-main-search
        .awesomplete
        > ul
        > li:hover,

        html.r34-post-view
        form.r34-main-search
        .awesomplete
        > ul
        > li:hover,

        html.r34-post-list
        form.r34-main-search
        .awesomplete
        > ul
        > li[aria-selected="true"],

        html.r34-post-view
        form.r34-main-search
        .awesomplete
        > ul
        > li[aria-selected="true"] {
            background:#17251c !important;
            color:#e8f5eb !important;
            border-color:#2f7942 !important;
            box-shadow:inset 3px 0 0 #22c55e !important;
        }


        /* =====================================================
           SIDEBAR
           ===================================================== */

        html.r34-post-page .sidebar {
            width:300px !important;
            min-width:300px !important;

            box-sizing:border-box !important;

            background:#111419 !important;

            color:#c9cdd3 !important;

            border:1px solid #242a32 !important;
            border-radius:12px !important;

            padding:12px !important;

            flex-shrink:0 !important;
        }

        html.r34-post-page #tag-sidebar {
            width:100% !important;
            box-sizing:border-box !important;
            background:transparent !important;
            color:#c9cdd3 !important;
        }


        /* =====================================================
           SIDEBAR DROPDOWN
           ===================================================== */

        html.r34-post-page
        .sidebar
        .awesomplete
        > ul,

        html.r34-post-page
        #tag-sidebar
        .awesomplete
        > ul,

        html.r34-post-page
        div.tag-search
        .awesomplete
        > ul {
            width:100% !important;
            min-width:0 !important;
            max-width:100% !important;

            max-height:300px !important;

            box-sizing:border-box !important;

            margin:8px 0 0 !important;
            padding:6px !important;

            background:#111419 !important;
            background-color:#111419 !important;
            background-image:none !important;

            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.04),
                0 0 18px rgba(34,197,94,.16),
                0 10px 28px rgba(0,0,0,.38) !important;

            overflow-x:hidden !important;
            overflow-y:auto !important;

            z-index:99999 !important;
        }


        html.r34-post-page
        .sidebar
        .awesomplete
        > ul
        > li,

        html.r34-post-page
        #tag-sidebar
        .awesomplete
        > ul
        > li,

        html.r34-post-page
        div.tag-search
        .awesomplete
        > ul
        > li {
            box-sizing:border-box !important;
            width:100% !important;

            margin:0 0 3px !important;
            padding:9px 11px !important;

            background:#15181d !important;
            color:#c9cdd3 !important;

            border:1px solid transparent !important;
            border-radius:8px !important;

            font-size:13px !important;
            font-weight:500 !important;
            line-height:1.3 !important;

            cursor:pointer !important;
        }

        html.r34-post-page
        .sidebar
        .awesomplete
        > ul
        > li:hover,

        html.r34-post-page
        #tag-sidebar
        .awesomplete
        > ul
        > li:hover,

        html.r34-post-page
        div.tag-search
        .awesomplete
        > ul
        > li:hover,

        html.r34-post-page
        .sidebar
        .awesomplete
        > ul
        > li[aria-selected="true"],

        html.r34-post-page
        #tag-sidebar
        .awesomplete
        > ul
        > li[aria-selected="true"],

        html.r34-post-page
        div.tag-search
        .awesomplete
        > ul
        > li[aria-selected="true"] {
            background:#17251c !important;
            color:#e8f5eb !important;
            border-color:#2f7942 !important;
            box-shadow:inset 3px 0 0 #22c55e !important;
        }


        /* =====================================================
           TAG HEADERS
           ===================================================== */

        html.r34-post-page #tag-sidebar h6 {
            display:block !important;
            width:100% !important;

            box-sizing:border-box !important;

            margin:14px 0 8px !important;
            padding:9px 12px !important;

            background:#15181d !important;

            border:1px solid #2b323b !important;
            border-radius:9px !important;

            font-size:15px !important;
            font-weight:700 !important;
            line-height:1.2 !important;

            letter-spacing:.2px !important;
        }


        html.r34-post-page
        #tag-sidebar
        h6.r34-section-character {
            color:#86efac !important;
            border-color:#2d7544 !important;

            background:
                linear-gradient(
                    135deg,
                    #14251a,
                    #18271d
                ) !important;

            box-shadow:
                0 0 10px rgba(74,222,128,.18) !important;
        }


        html.r34-post-page
        #tag-sidebar
        h6.r34-section-general {
            color:#93c5fd !important;
            border-color:#315b86 !important;

            background:
                linear-gradient(
                    135deg,
                    #141c27,
                    #17212d
                ) !important;

            box-shadow:
                0 0 10px rgba(96,165,250,.16) !important;
        }


        html.r34-post-page
        #tag-sidebar
        h6.r34-section-meta {
            color:#fde047 !important;
            border-color:#756c24 !important;

            background:
                linear-gradient(
                    135deg,
                    #252313,
                    #292715
                ) !important;

            box-shadow:
                0 0 10px rgba(250,204,21,.16) !important;
        }


        html.r34-post-page
        #tag-sidebar
        h6.r34-section-copyright {
            color:#f9a8d4 !important;
            border-color:#7d3f63 !important;

            background:
                linear-gradient(
                    135deg,
                    #251822,
                    #291a26
                ) !important;

            box-shadow:
                0 0 10px rgba(244,114,182,.16) !important;
        }


        html.r34-post-page
        #tag-sidebar
        h6.r34-section-artist {
            color:#fca5a5 !important;
            border-color:#7d3b3b !important;

            background:
                linear-gradient(
                    135deg,
                    #271818,
                    #2a1a1a
                ) !important;

            box-shadow:
                0 0 10px rgba(248,113,113,.16) !important;
        }


        /* =====================================================
           TAG ROWS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        li[class*="tag-type-"] {
            color:#9da5af !important;
            background:transparent !important;
        }


        html.r34-post-page
        #tag-sidebar
        li[class*="tag-type-"]
        a {
            font-size:15px !important;
            font-weight:500 !important;
            text-decoration:none !important;
        }


        /* =====================================================
           TAG COLORS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        .tag-type-artist
        a {
            color:#fca5a5 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-character
        a {
            color:#86efac !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-copyright
        a {
            color:#f9a8d4 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-metadata
        a {
            color:#fde047 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-general
        a {
            color:#93c5fd !important;
        }


        /* =====================================================
           TAG COUNTS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        .r34-tag-count,

        html.r34-post-page
        #tag-sidebar
        [class*="tag-count"],

        html.r34-post-page
        #tag-sidebar
        .count {
            display:inline-block !important;

            margin-left:6px !important;

            color:#9da5af !important;

            background:transparent !important;
            opacity:1 !important;

            font-size:13px !important;
            font-weight:500 !important;
        }


        /* =====================================================
           SIDEBAR SEARCH
           ===================================================== */

        html.r34-post-page
        div.tag-search
        input[type="text"] {
            width:100% !important;
            min-width:0 !important;

            height:40px !important;

            box-sizing:border-box !important;

            padding:0 10px !important;
            margin:0 !important;

            background:#15181d !important;

            color:#d9dde3 !important;

            border:1px solid #303640 !important;
            border-radius:9px !important;

            font-size:14px !important;

            outline:none !important;
        }


        /* =====================================================
           SIDEBAR SEARCH BUTTON
           ===================================================== */

        html.r34-post-page
        div.tag-search
        input[type="submit"].r34-sidebar-search-button {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            width:180px !important;
            min-width:180px !important;

            height:60px !important;
            min-height:60px !important;

            padding:0 34px !important;

            margin:12px 0 0 !important;

            border:none !important;
            border-radius:9999px !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a,
                    #15803d
                ) !important;

            color:#fff !important;

            font-size:17px !important;
            font-weight:600 !important;

            line-height:1 !important;
            text-align:center !important;

            cursor:pointer !important;

            appearance:none !important;
            -webkit-appearance:none !important;

            box-shadow:
                0 5px 18px rgba(22,163,74,.24) !important;
        }

        html.r34-post-page
        div.tag-search
        input[type="submit"].r34-sidebar-search-button:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;

            box-shadow:
                0 8px 24px rgba(22,163,74,.34) !important;
        }


        /* =====================================================
           PREVIOUS / NEXT
           ===================================================== */

        html.r34-modern .r34-prev-next {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            min-height:38px !important;

            padding:0 14px !important;

            color:#4ade80 !important;
            background:#111419 !important;

            border:1px solid #245a34 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;

            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-modern .r34-prev-next:hover {
            color:#bbf7d0 !important;
            background:#17231b !important;
            border-color:#3d9550 !important;

            box-shadow:
                0 0 12px rgba(34,197,94,.20) !important;

            transform:translateY(-1px) !important;
        }


        /* =====================================================
           PAGINATOR
           ===================================================== */

        html.r34-modern #paginator {
            clear:both !important;

            margin:28px 0 !important;

            color:#9da5af !important;
            text-align:center !important;
        }

        html.r34-modern #paginator .pagination {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            flex-wrap:wrap !important;

            gap:6px !important;

            padding:6px !important;

            background:#111419 !important;

            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
                0 0 16px rgba(34,197,94,.12) !important;
        }

        html.r34-modern #paginator .pagination a {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:38px !important;
            height:38px !important;

            padding:0 11px !important;
            margin:0 !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            background:#181c22 !important;

            color:#9da5af !important;

            font-size:14px !important;
            font-weight:600 !important;

            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-modern #paginator .pagination a:hover {
            color:#e3e8ed !important;
            background:#1b2820 !important;
            border-color:#357546 !important;

            box-shadow:
                0 0 10px rgba(34,197,94,.14) !important;

            transform:translateY(-1px) !important;
        }


        /* =====================================================
           CURRENT PAGE
           ===================================================== */

        html.r34-post-list
        #paginator
        .pagination
        b,

        html.r34-post-list
        #paginator
        .pagination
        strong,

        html.r34-post-list
        #paginator
        .pagination
        span.current,

        html.r34-post-list
        #paginator
        .pagination
        span.active,

        html.r34-post-list
        #paginator
        .pagination
        span.selected,

        html.r34-post-list
        #paginator
        .pagination
        .current,

        html.r34-post-list
        #paginator
        .pagination
        .active,

        html.r34-post-list
        #paginator
        .pagination
        .selected,

        html.r34-post-list
        #paginator
        .pagination
        .r34-paginator-current {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:38px !important;
            height:38px !important;

            padding:0 11px !important;
            margin:0 !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a
                ) !important;

            color:#fff !important;

            border:1px solid #22c55e !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:700 !important;

            line-height:1 !important;

            box-shadow:
                0 0 10px rgba(34,197,94,.24),
                0 0 22px rgba(34,197,94,.12) !important;

            opacity:1 !important;
        }


        /* =====================================================
           COMMENT PAGINATOR
           ===================================================== */

        html.r34-post-view
        #paginator.r34-comment-paginator {
            display:flex !important;

            align-items:center !important;
            justify-content:center !important;

            flex-wrap:wrap !important;

            gap:8px !important;

            width:100% !important;

            box-sizing:border-box !important;

            margin:18px 0 26px !important;
            padding:10px !important;

            background:#111419 !important;

            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
                0 0 16px rgba(34,197,94,.10) !important;
        }

        html.r34-post-view
        #paginator.r34-comment-paginator
        a {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:88px !important;
            height:40px !important;

            padding:0 16px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#4ade80 !important;

            border:1px solid #315f3d !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;

            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-post-view
        #paginator.r34-comment-paginator
        a:hover {
            background:#1b2820 !important;
            color:#c4f7cf !important;

            border-color:#4a9258 !important;

            box-shadow:
                0 0 12px rgba(34,197,94,.18) !important;

            transform:translateY(-1px) !important;
        }


        /* =====================================================
           MANUAL PAGE
           ===================================================== */

        html.r34-modern
        #paginator
        form.r34-manual-page-form {
            display:inline-flex !important;

            flex-direction:row !important;

            align-items:center !important;
            justify-content:flex-start !important;

            flex-wrap:nowrap !important;

            gap:6px !important;

            width:auto !important;
            height:38px !important;

            margin:0 !important;
            padding:0 !important;

            background:transparent !important;

            border:none !important;
            box-shadow:none !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-input {
            display:inline-block !important;

            box-sizing:border-box !important;

            width:78px !important;
            min-width:78px !important;

            height:38px !important;

            padding:0 9px !important;
            margin:0 !important;

            background:#181c22 !important;

            color:#dce2e8 !important;

            border:1px solid #303640 !important;
            border-radius:9px !important;

            outline:none !important;

            font-size:14px !important;

            line-height:38px !important;

            text-align:center !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-input:focus {
            border-color:#22a04d !important;

            box-shadow:
                0 0 0 3px rgba(34,197,94,.10) !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-button,

        html.r34-modern
        #paginator
        button.r34-manual-page-button {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            width:58px !important;
            min-width:58px !important;

            height:38px !important;
            min-height:38px !important;

            padding:0 12px !important;
            margin:0 !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a
                ) !important;

            color:#fff !important;

            border:1px solid #23743c !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;

            line-height:1 !important;

            text-align:center !important;

            cursor:pointer !important;

            appearance:none !important;
            -webkit-appearance:none !important;
        }


        /* =====================================================
           PAGEID
           ===================================================== */

        html.r34-modern
        input#pageid {
            display:inline-block !important;

            box-sizing:border-box !important;

            width:82px !important;
            min-width:82px !important;

            height:38px !important;

            padding:0 10px !important;
            margin:0 !important;

            background:#181c22 !important;

            color:#dce2e8 !important;

            border:1px solid #303640 !important;
            border-radius:9px !important;

            outline:none !important;

            font-size:14px !important;

            text-align:center !important;
        }

        html.r34-modern
        input#pageid:focus {
            border-color:#22a04d !important;

            box-shadow:
                0 0 0 3px rgba(34,197,94,.10) !important;
        }


        /* =====================================================
           COMMENTS
           ===================================================== */

        html.r34-post-view
        #comment-list {
            box-sizing:border-box !important;

            width:100% !important;

            margin:28px 0 !important;
            padding:20px !important;

            background:#111419 !important;

            border:1px solid #242a32 !important;
            border-radius:14px !important;

            color:#c9cdd3 !important;

            box-shadow:
                0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-post-view
        #comment-list::before {
            content:"Comments" !important;

            display:block !important;

            margin-bottom:16px !important;
            padding-bottom:12px !important;

            border-bottom:1px solid #242a32 !important;

            color:#e0e4e9 !important;

            font-size:20px !important;
            font-weight:700 !important;

            line-height:1.2 !important;
        }

        html.r34-post-view
        #comment-list
        > div[id^="c"] {
            box-sizing:border-box !important;

            margin:0 0 12px !important;
            padding:14px 16px !important;

            background:#15181d !important;

            border:1px solid #292f37 !important;
            border-radius:10px !important;

            color:#c9cdd3 !important;
        }

        html.r34-post-view
        #comment-list
        > div[id^="c"]:hover {
            background:#181b21 !important;
            border-color:#353c46 !important;
        }


        /* =====================================================
           PLACEHOLDERS
           ===================================================== */

        html.r34-modern
        input::placeholder,

        html.r34-modern
        textarea::placeholder {
            color:#737983 !important;
            opacity:1 !important;

            font-family:
                "Inter",
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif !important;
        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width:900px) {

            html.r34-post-page
            .sidebar {
                width:260px !important;
                min-width:260px !important;
            }

            html.r34-post-list
            form.r34-main-search
            .awesomplete,

            html.r34-post-view
            form.r34-main-search
            .awesomplete {
                width:min(460px,52vw) !important;
                max-width:460px !important;
            }

            html.r34-post-list
            form.r34-main-search
            input[name="tags"],

            html.r34-post-view
            form.r34-main-search
            input[name="tags"] {
                max-width:460px !important;
            }

            html.r34-post-list
            form.r34-main-search
            .awesomplete
            > ul,

            html.r34-post-view
            form.r34-main-search
            .awesomplete
            > ul {
                width:340px !important;
                min-width:340px !important;
                max-width:340px !important;
            }
        }


        @media (max-width:700px) {

            html.r34-home
            #static-index
            p.index-header
            img {
                width:320px !important;
                max-width:75vw !important;
            }

            html.r34-home
            #static-index
            form
            .awesomplete {
                width:90vw !important;
                max-width:90vw !important;
            }

            html.r34-home
            #static-index
            form
            input[type="text"],

            html.r34-home
            #static-index
            form
            input[type="search"] {
                height:56px !important;
                font-size:16px !important;
            }

            html.r34-home
            #static-index
            form
            input[type="submit"].r34-search-button {
                width:160px !important;
                min-width:160px !important;

                height:56px !important;
                min-height:56px !important;

                margin-top:14px !important;
                margin-bottom:14px !important;

                font-size:16px !important;
            }

            html.r34.home
            #static-index
            form
            .awesomplete
            > ul {
                width:360px !important;
                max-width:90vw !important;
            }

            html.r34-post-page
            form.r34-main-search {
                flex-direction:column !important;

                align-items:center !important;
                justify-content:center !important;

                gap:12px !important;
            }

            html.r34-post-list
            form.r34-main-search
            .awesomplete,

            html.r34-post-view
            form.r34-main-search
            .awesomplete {
                width:92vw !important;
                max-width:92vw !important;
            }

            html.r34-post-list
            form.r34-main-search
            input[name="tags"],

            html.r34-post-view
            form.r34-main-search
            input[name="tags"] {
                width:100% !important;
                max-width:none !important;
                height:56px !important;
            }

            html.r34-post-list
            form.r34-main-search
            .awesomplete
            > ul,

            html.r34-post-view
            form.r34-main-search
            .awesomplete
            > ul {
                width:92vw !important;
                min-width:0 !important;
                max-width:92vw !important;
            }

            html.r34-post-page
            form.r34-main-search
            input[type="submit"].r34-search-button {
                width:100% !important;
                min-width:0 !important;
                max-width:100% !important;
                margin-top:0 !important;
            }

            html.r34-post-page
            .sidebar {
                width:100% !important;
                min-width:0 !important;
            }

            html.r34-post-page
            .sidebar
            .awesomplete
            > ul,

            html.r34-post-page
            #tag-sidebar
            .awesomplete
            > ul,

            html.r34-post-page
            div.tag-search
            .awesomplete
            > ul {
                width:100% !important;
                min-width:0 !important;
                max-width:100% !important;
            }

            html.r34-post-page
            div.tag-search
            input[type="submit"].r34-sidebar-search-button {
                width:100% !important;
                min-width:0 !important;

                height:56px !important;
                min-height:56px !important;

                font-size:16px !important;
            }

            html.r34-post-page
            #tag-sidebar
            h6 {
                margin:12px 0 7px !important;
                padding:8px 10px !important;

                font-size:14px !important;

                border-radius:8px !important;
            }

            html.r34-post-view
            #comment-list {
                margin:20px 0 !important;
                padding:14px !important;

                border-radius:12px !important;
            }

            html.r34-post-view
            #paginator.r34-comment-paginator {
                gap:5px !important;

                margin:14px 0 20px !important;
                padding:7px !important;

                border-radius:10px !important;
            }

            html.r34-post-view
            #paginator.r34-comment-paginator
            a {
                min-width:78px !important;
                height:36px !important;

                padding:0 12px !important;

                font-size:13px !important;

                border-radius:8px !important;
            }

            html.r34-modern
            #paginator
            .pagination {
                gap:4px !important;

                padding:5px !important;

                max-width:96vw !important;

                overflow-x:auto !important;
            }

            html.r34-modern
            #paginator
            .pagination
            a,

            html.r34-post-list
            #paginator
            .pagination
            .r34-paginator-current {
                min-width:34px !important;
                height:34px !important;

                padding:0 8px !important;

                font-size:13px !important;
            }

            html.r34-modern
            #navlinksContainer {
                border-radius:11px !important;
            }
        }

    `);


    /* =========================================================
       FORCE INTER ON ACTUAL ELEMENTS
       ========================================================= */

    function applyInterToElements() {

        if (!document.documentElement) {
            return;
        }

        const elements =
            document.querySelectorAll('*');

        const font =
            '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';

        for (
            const element of elements
        ) {

            element.style.setProperty(
                'font-family',
                font,
                'important'
            );
        }
    }


    /* =========================================================
       REMOVE data-nosnippet
       ========================================================= */

    function removeNoSnippetSpans() {

        const elements =
            document.querySelectorAll(
                'span[data-nosnippet]'
            );

        for (
            const element of elements
        ) {

            if (
                element.querySelector(
                    'form,input,button,select,textarea'
                )
            ) {
                continue;
            }

            element.remove();
        }
    }


    /* =========================================================
       MARK MAIN SEARCH FORM
       ========================================================= */

    function markMainSearchForm() {

        if (!isPostPage) {
            return;
        }

        const inputs =
            document.querySelectorAll(
                '#content input[name="tags"]'
            );

        for (
            const input of inputs
        ) {

            const form =
                input.closest('form');

            if (form) {
                form.classList.add(
                    'r34-main-search'
                );
            }
        }
    }


    /* =========================================================
       MARK SEARCH BUTTONS
       ========================================================= */

    function markSearchButtons() {

        if (isHomePage) {

            const buttons =
                document.querySelectorAll(
                    '#static-index input[name="searchDefault"],' +
                    '#static-index input[type="submit"]'
                );

            for (
                const button of buttons
            ) {

                button.classList.add(
                    'r34-search-button'
                );
            }
        }


        if (isPostPage) {

            const buttons =
                document.querySelectorAll(
                    'form.r34-main-search input[type="submit"]'
                );

            for (
                const button of buttons
            ) {

                button.classList.add(
                    'r34-search-button'
                );
            }


            const sidebarButtons =
                document.querySelectorAll(
                    'div.tag-search input[type="submit"]'
                );

            for (
                const button of sidebarButtons
            ) {

                button.classList.add(
                    'r34-sidebar-search-button'
                );
            }
        }
    }


    /* =========================================================
       TOP NAVBAR
       ========================================================= */

    function markTopNavbar() {

        const names =
            new Set([
                'My Account',
                'Posts',
                'Comments',
                'Wiki',
                'Aliases',
                'Artists',
                'Tags',
                'Pools',
                'Forum',
                'iCame Top 100',
                'Help',
                'Discord',
                'X',
                '💦 AI CUMSLUTS',
                'Other Sites'
            ]);

        for (
            const link of document.querySelectorAll('a')
        ) {

            const text =
                link.textContent
                    .replace(/\s+/g, ' ')
                    .trim();

            if (
                !names.has(text)
            ) {
                continue;
            }

            const rect =
                link.getBoundingClientRect();

            if (
                rect.top > 250 ||
                rect.width === 0 ||
                rect.height === 0
            ) {
                continue;
            }

            link.classList.add(
                'r34-topnav-link'
            );

            const item =
                link.closest('li');

            if (item) {
                item.classList.add(
                    'r34-topnav-item'
                );
            }
        }
    }


    /* =========================================================
       PREVIOUS / NEXT
       ========================================================= */

    function markPreviousNext() {

        for (
            const link of document.querySelectorAll('a')
        ) {

            const text =
                link.textContent
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();

            if (
                text === 'previous' ||
                text === 'next'
            ) {

                link.classList.add(
                    'r34-prev-next'
                );
            }
        }
    }


    /* =========================================================
       MANUAL PAGE CONTROLS
       ========================================================= */

    function markManualPageControls() {

        const inputs =
            document.querySelectorAll(
                [
                    '#manualpage',
                    'input[name="manualpage"]',
                    'input[id*="manualpage" i]',
                    'input[name*="manualpage" i]',
                    'input[name="manual_page"]',
                    'input[id*="manual_page" i]'
                ].join(',')
            );

        for (
            const input of inputs
        ) {

            input.classList.add(
                'r34-manual-page-input'
            );

            const form =
                input.closest('form');

            if (!form) {
                continue;
            }

            form.classList.add(
                'r34-manual-page-form'
            );

            for (
                const control of form.querySelectorAll(
                    'input[type="submit"],' +
                    'input[type="button"],' +
                    'button'
                )
            ) {

                const value =
                    (
                        control.value ||
                        control.textContent ||
                        ''
                    )
                        .replace(/\s+/g, ' ')
                        .trim()
                        .toLowerCase();

                if (
                    value === 'go' ||
                    value === 'goto'
                ) {

                    control.classList.add(
                        'r34-manual-page-button'
                    );
                }
            }
        }
    }


    /* =========================================================
       PAGE ID
       ========================================================= */

    function markPageId() {

        for (
            const input of document.querySelectorAll(
                'input#pageid'
            )
        ) {

            input.classList.add(
                'r34-pageid'
            );
        }
    }


    /* =========================================================
       COMMENT PAGINATOR
       ========================================================= */

    function markCommentPaginator() {

        if (!isPostViewPage) {
            return;
        }

        const paginator =
            document.querySelector(
                '#paginator'
            );

        if (paginator) {

            paginator.classList.add(
                'r34-comment-paginator'
            );
        }
    }


    /* =========================================================
       POST PAGINATOR CURRENT PAGE
       ========================================================= */

    function markPostPaginatorCurrent() {

        if (!isPostListPage) {
            return;
        }

        const paginator =
            document.querySelector(
                '#paginator .pagination'
            );

        if (!paginator) {
            return;
        }

        for (
            const element of paginator.querySelectorAll(
                '.r34-paginator-current'
            )
        ) {

            element.classList.remove(
                'r34-paginator-current'
            );
        }

        const candidates =
            paginator.querySelectorAll(
                [
                    '.current',
                    '.active',
                    '.selected',
                    'span.current',
                    'span.active',
                    'span.selected',
                    'li.current',
                    'li.active',
                    'li.selected',
                    'b',
                    'strong',
                    'span'
                ].join(',')
            );

        for (
            const element of candidates
        ) {

            if (
                element.closest('a')
            ) {
                continue;
            }

            const text =
                element.textContent
                    .replace(/\s+/g, ' ')
                    .trim();

            if (
                /^\d+$/.test(text)
            ) {

                element.classList.add(
                    'r34-paginator-current'
                );

                return;
            }
        }
    }


    /* =========================================================
       TAG COUNTS
       ========================================================= */

    function wrapTagCounts() {

        if (!isPostPage) {
            return;
        }

        const rows =
            document.querySelectorAll(
                '#tag-sidebar li[class*="tag-type-"]'
            );

        for (
            const row of rows
        ) {

            for (
                const element of row.querySelectorAll(
                    '[class*="count" i],small,em'
                )
            ) {

                const text =
                    element.textContent
                        .replace(/\s+/g, ' ')
                        .trim();

                if (
                    /^\d[\d,]*$/.test(text)
                ) {

                    element.classList.add(
                        'r34-tag-count'
                    );
                }
            }


            const walker =
                document.createTreeWalker(
                    row,
                    NodeFilter.SHOW_TEXT
                );

            const nodes = [];

            while (
                walker.nextNode()
            ) {

                nodes.push(
                    walker.currentNode
                );
            }


            for (
                const node of nodes
            ) {

                if (
                    !node.parentElement
                ) {
                    continue;
                }

                if (
                    node.parentElement.closest('a')
                ) {
                    continue;
                }

                if (
                    node.parentElement.classList.contains(
                        'r34-tag-count'
                    )
                ) {
                    continue;
                }

                const text =
                    node.nodeValue || '';

                if (
                    !/^\s*[\d,]+\s*$/.test(text)
                ) {
                    continue;
                }

                const count =
                    document.createElement(
                        'span'
                    );

                count.className =
                    'r34-tag-count';

                count.textContent =
                    text.trim();

                node.parentNode.replaceChild(
                    count,
                    node
                );
            }
        }
    }


    /* =========================================================
       TAG SECTION HEADERS
       ========================================================= */

    function markTagSectionHeaders() {

        if (!isPostPage) {
            return;
        }

        for (
            const header of document.querySelectorAll(
                '#tag-sidebar h6'
            )
        ) {

            const text =
                header.textContent
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();

            header.classList.remove(
                'r34-section-character',
                'r34-section-general',
                'r34-section-meta',
                'r34-section-copyright',
                'r34-section-artist'
            );

            if (
                text.includes(
                    'character'
                )
            ) {

                header.classList.add(
                    'r34-section-character'
                );

            } else if (
                text.includes(
                    'general'
                )
            ) {

                header.classList.add(
                    'r34-section-general'
                );

            } else if (
                text.includes('meta') ||
                text.includes('metadata')
            ) {

                header.classList.add(
                    'r34-section-meta'
                );

            } else if (
                text.includes(
                    'copyright'
                )
            ) {

                header.classList.add(
                    'r34-section-copyright'
                );

            } else if (
                text.includes(
                    'artist'
                )
            ) {

                header.classList.add(
                    'r34-section-artist'
                );
            }
        }
    }


    /* =========================================================
       FILTER AI POSTS
       ========================================================= */

    function replaceFilterAIText() {

        if (!document.body) {
            return;
        }

        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT
            );

        const nodes = [];

        while (
            walker.nextNode()
        ) {

            nodes.push(
                walker.currentNode
            );
        }

        for (
            const node of nodes
        ) {

            if (
                !node.nodeValue ||
                !node.nodeValue.includes(
                    'Filter AI posts'
                )
            ) {
                continue;
            }

            node.nodeValue =
                node.nodeValue.replace(
                    /Filter AI posts/g,
                    'Make Sam Altman EVIL'
                );
        }
    }

  /* =========================================================
       СУУКА БИТУБИ СААС
       ========================================================= */
  function replaceGelbooruFooterText() {

    if (!document.body) {
        return;
    }

    const paragraphs =
        document.querySelectorAll('p');

    for (const paragraph of paragraphs) {

        if (
            !paragraph.textContent.includes(
                'Serving '
            ) ||
            !paragraph.textContent.includes(
                'Running '
            ) ||
            !paragraph.textContent.includes(
                'Gelbooru'
            ) ||
            !paragraph.textContent.includes(
                'Beta 0.2'
            )
        ) {
            continue;
        }

        /*
         * Не трогаем уже изменённый текст.
         */

        if (
            paragraph.textContent.includes(
                'БИТУБИ СААААААС'
            )
        ) {
            continue;
        }

        /*
         * Находим непосредственно текстовый узел
         * после ссылки Gelbooru.
         */

        const link =
            paragraph.querySelector(
                'a[href*="gelbooru.com"]'
            );

        if (!link) {
            continue;
        }

        /*
         * Ищем текстовый узел после ссылки,
         * содержащий "Beta 0.2".
         */

        let node = link.nextSibling;

        while (node) {

            if (
                node.nodeType ===
                Node.TEXT_NODE &&
                node.nodeValue.includes(
                    'Beta 0.2'
                )
            ) {

                node.nodeValue =
                    node.nodeValue.replace(
                        'Beta 0.2',
                        'Beta 0.2 - БИТУБИ СААААААС'
                    );

                break;
            }

            node = node.nextSibling;
        }
    }
}

    /* =========================================================
       UPDATE
       ========================================================= */

    function updateUI() {

        removeNoSnippetSpans();

        markMainSearchForm();

        markSearchButtons();

        markTopNavbar();

        markPreviousNext();

        markManualPageControls();

        markPageId();

        markCommentPaginator();

        markPostPaginatorCurrent();

        wrapTagCounts();

        markTagSectionHeaders();

        replaceFilterAIText();

        replaceGelbooruFooterText()

        applyInterToElements();
    }


    /* =========================================================
       START
       ========================================================= */

    function start() {

        updateUI();

        setTimeout(
            updateUI,
            300
        );

        setTimeout(
            updateUI,
            1000
        );


        if (
            document.fonts &&
            document.fonts.ready
        ) {

            document.fonts.ready
                .then(
                    () => {
                        applyInterToElements();
                    }
                )
                .catch(
                    () => {}
                );
        }
    }


    /* =========================================================
       DOM READY
       ========================================================= */

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            start,
            {
                once:true
            }
        );

    } else {

        start();
    }

})();
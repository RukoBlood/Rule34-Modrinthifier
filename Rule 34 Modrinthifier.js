// ==UserScript==
// @name         Rule34.xxx — Modern UI
// @namespace    https://rule34.xxx/
// @version      2.0.0
// @description  Modernize Rule34.xxx interface
// @author       You
// @match        https://rule34.xxx/*
// @match        https://www.rule34.xxx/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    /*
     * =========================================
     * PAGE DETECTION
     * =========================================
     */

    const params = new URLSearchParams(
        window.location.search
    );

    const page = params.get('page');
    const section = params.get('s');

    const isHomePage =
        !page &&
        (
            window.location.pathname === '/' ||
            window.location.pathname === '/index.php'
        );

    const isPostPage =
        page === 'post' &&
        (
            section === 'list' ||
            section === 'view'
        );

    const isPostListPage =
        page === 'post' &&
        section === 'list';

    const isPostViewPage =
        page === 'post' &&
        section === 'view';


    /*
     * =========================================
     * PAGE CLASSES
     * =========================================
     */

    function addPageClasses() {

        const html = document.documentElement;

        html.classList.add('r34-modern');

        if (isHomePage) {
            html.classList.add('r34-home');
        }

        if (isPostPage) {
            html.classList.add('r34-post-page');
        }

        if (isPostListPage) {
            html.classList.add('r34-post-list');
        }

        if (isPostViewPage) {
            html.classList.add('r34-post-view');
        }
    }

    addPageClasses();


    /*
     * =========================================
     * LOAD INTER
     * =========================================
     */

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


    /*
     * =========================================
     * CSS
     * =========================================
     */

    GM_addStyle(`

        /* =====================================================
           GLOBAL
           ===================================================== */

        html.r34-modern {
            background: #0b0d10 !important;
        }

        html.r34-modern body {

            background: #0b0d10 !important;
            color: #c9cdd3 !important;

            font-family:
                "Inter",
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif !important;

            font-size:
                16px !important;

            line-height:
                1.5 !important;
        }


        /* =====================================================
           GLOBAL FONT
           ===================================================== */

        html.r34-modern body,
        html.r34-modern body p,
        html.r34-modern body span,
        html.r34-modern body div,
        html.r34-modern body a,
        html.r34-modern body li,
        html.r34-modern body label,
        html.r34-modern body td,
        html.r34-modern body th,
        html.r34-modern body button,
        html.r34-modern body input,
        html.r34-modern body textarea,
        html.r34-modern body select,
        html.r34-modern body option,
        html.r34-modern body h1,
        html.r34-modern body h2,
        html.r34-modern body h3,
        html.r34-modern body h4,
        html.r34-modern body h5,
        html.r34-modern body h6 {

            font-family:
                "Inter",
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif !important;
        }

        html.r34-modern strong,
        html.r34-modern b {
            font-weight:
                600 !important;
        }


        /* =====================================================
           GENERAL TEXT
           ===================================================== */

        html.r34-modern #content,
        html.r34-modern .content,
        html.r34-modern .sidebar,
        html.r34-modern #tag-sidebar {

            color:
                #c9cdd3 !important;
        }

        html.r34-modern #content p,
        html.r34-modern #content span,
        html.r34-modern #content div,
        html.r34-modern #content li,
        html.r34-modern .content p,
        html.r34-modern .content span,
        html.r34-modern .content div,
        html.r34-modern .sidebar,
        html.r34-modern .sidebar li {

            color:
                #c9cdd3 !important;
        }


        /* =====================================================
           GENERAL LINKS
           ===================================================== */

        html.r34-modern a,
        html.r34-modern a:visited {

            color:
                #aeb4bd;
        }

        html.r34-modern a:hover {

            color:
                #e0e4e9;
        }


        /* =====================================================
           TOP NAVBAR
           ===================================================== */

        html.r34-modern .r34-topnav-link,
        html.r34-modern .r34-topnav-link:visited,
        html.r34-modern .r34-topnav-link:hover,
        html.r34-modern .r34-topnav-link:active {

            color:
                #8e949d !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;

            border:
                none !important;

            box-shadow:
                none !important;

            text-decoration:
                none !important;
        }

        html.r34-modern .r34-topnav-link:hover {

            color:
                #d0d5dc !important;
        }

        html.r34-modern .r34-topnav-item,
        html.r34-modern .r34-topnav-item:hover,
        html.r34-modern .r34-topnav-item:active,
        html.r34-modern .r34-topnav-item.current,
        html.r34-modern .r34-topnav-item.active,
        html.r34-modern .r34-topnav-item.selected,
        html.r34-modern .r34-topnav-item.current-page {

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;

            border:
                none !important;

            box-shadow:
                none !important;
        }

        html.r34-modern
        .r34-topnav-item.current
        .r34-topnav-link,

        html.r34-modern
        .r34-topnav-item.active
        .r34-topnav-link,

        html.r34-modern
        .r34-topnav-item.selected
        .r34-topnav-link,

        html.r34-modern
        .r34-topnav-item.current-page
        .r34-topnav-link {

            color:
                #c5cad1 !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;
        }


        /* =====================================================
           SUBNAVBAR
           ===================================================== */

        html.r34-modern #subnavbar,
        html.r34-modern ul#subnavbar {

            background:
                #111419 !important;

            background-color:
                #111419 !important;

            background-image:
                none !important;

            border:
                none !important;

            box-shadow:
                none !important;

            color:
                #8e949d !important;
        }

        html.r34-modern #subnavbar *,
        html.r34-modern ul#subnavbar * {

            background-image:
                none !important;
        }

        html.r34-modern #subnavbar li,
        html.r34-modern ul#subnavbar li {

            background:
                transparent !important;

            background-color:
                transparent !important;

            color:
                #8e949d !important;
        }

        html.r34-modern #subnavbar li a,
        html.r34-modern ul#subnavbar li a,
        html.r34-modern #subnavbar li a:visited,
        html.r34-modern ul#subnavbar li a:visited {

            color:
                #8e949d !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;

            border:
                none !important;

            box-shadow:
                none !important;

            text-decoration:
                none !important;
        }

        html.r34-modern #subnavbar li a:hover,
        html.r34-modern ul#subnavbar li a:hover {

            color:
                #d2d6dc !important;

            background:
                transparent !important;

            background-color:
                transparent !important;
        }

        html.r34-modern #subnavbar li.current-page,
        html.r34-modern #subnavbar li.active,
        html.r34-modern #subnavbar li.selected,
        html.r34-modern #subnavbar li.current,
        html.r34-modern ul#subnavbar li.current-page,
        html.r34-modern ul#subnavbar li.active,
        html.r34-modern ul#subnavbar li.selected,
        html.r34-modern ul#subnavbar li.current {

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;

            color:
                #c5cad1 !important;
        }

        html.r34-modern #subnavbar li.current-page a,
        html.r34-modern #subnavbar li.active a,
        html.r34-modern #subnavbar li.selected a,
        html.r34-modern #subnavbar li.current a,
        html.r34-modern ul#subnavbar li.current-page a,
        html.r34-modern ul#subnavbar li.active a,
        html.r34-modern ul#subnavbar li.selected a,
        html.r34-modern ul#subnavbar li.current a {

            color:
                #c5cad1 !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;
        }


        /* =====================================================
           NAV LINKS CONTAINER
           ===================================================== */

        html.r34-modern #navlinksContainer {

            box-sizing:
                border-box !important;

            background:
                #111419 !important;

            background-color:
                #111419 !important;

            background-image:
                none !important;

            color:
                #c9cdd3 !important;

            border:
                1px solid #245a34 !important;

            border-radius:
                14px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.04),
                0 0 14px rgba(34,197,94,.18),
                0 0 32px rgba(34,197,94,.08),
                inset 0 1px 0 rgba(255,255,255,.025) !important;

            overflow:
                hidden !important;
        }

        html.r34-modern #navlinksContainer * {

            background-image:
                none !important;
        }

        html.r34-modern #navlinksContainer a,
        html.r34-modern #navlinksContainer a:visited {

            color:
                #8e949d !important;

            text-decoration:
                none !important;
        }

        html.r34-modern #navlinksContainer a:hover {

            color:
                #d0d5dc !important;
        }


        /* =====================================================
           STATUS NOTICE
           ===================================================== */

        html.r34-modern div.status-notice {

            box-sizing:
                border-box !important;

            width:
                100% !important;

            margin:
                14px 0 !important;

            padding:
                14px 18px !important;

            background:
                linear-gradient(
                    135deg,
                    #142018,
                    #13251a,
                    #102116
                ) !important;

            background-color:
                #142018 !important;

            background-image:
                linear-gradient(
                    135deg,
                    #142018,
                    #13251a,
                    #102116
                ) !important;

            color:
                #cfe8d5 !important;

            border:
                1px solid #234c30 !important;

            border-radius:
                12px !important;

            box-shadow:
                0 4px 16px rgba(0,0,0,.18),
                inset 0 1px 0 rgba(255,255,255,.025) !important;

            font-size:
                15px !important;
        }


        /* =====================================================
           HOME
           ===================================================== */

        html.r34-home #static-index {

            min-height:
                100vh !important;

            box-sizing:
                border-box !important;

            display:
                flex !important;

            flex-direction:
                column !important;
        }


        /* =====================================================
           LOGO
           ===================================================== */

        html.r34-home
        #static-index
        p.index-header {

            padding-top:
                30px !important;

            margin-bottom:
                18px !important;
        }

        html.r34-home
        #static-index
        p.index-header
        img {

            width:
                420px !important;

            max-width:
                65vw !important;

            height:
                auto !important;
        }


        /* =====================================================
           HOME SEARCH
           ===================================================== */

        html.r34-home
        input[type="text"],
        html.r34-home
        input[type="search"] {

            box-sizing:
                border-box !important;

            width:
                min(520px, 60vw) !important;

            min-width:
                280px !important;

            height:
                60px !important;

            padding:
                0 20px !important;

            margin:
                0 !important;

            background:
                #15181d !important;

            background-color:
                #15181d !important;

            color:
                #e3e6eb !important;

            border:
                1px solid #292e36 !important;

            border-radius:
                14px !important;

            font-size:
                17px !important;

            font-weight:
                400 !important;

            line-height:
                1.2 !important;

            outline:
                none !important;
        }


        /* =====================================================
           SHARED SEARCH BUTTON
           ===================================================== */

        html.r34-modern
        input[type="submit"].r34-search-button {

            box-sizing:
                border-box !important;

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            width:
                180px !important;

            min-width:
                180px !important;

            height:
                60px !important;

            min-height:
                60px !important;

            padding:
                0 34px !important;

            border:
                none !important;

            border-radius:
                9999px !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a,
                    #15803d
                ) !important;

            color:
                #ffffff !important;

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            font-size:
                17px !important;

            font-weight:
                600 !important;

            line-height:
                1 !important;

            text-align:
                center !important;

            cursor:
                pointer !important;

            appearance:
                none !important;

            -webkit-appearance:
                none !important;

            box-shadow:
                0 5px 18px rgba(22,163,74,.24) !important;

            transition:
                transform .15s ease,
                box-shadow .15s ease,
                filter .15s ease !important;
        }

        html.r34-modern
        input[type="submit"].r34-search-button:hover {

            filter:
                brightness(1.08) !important;

            transform:
                translateY(-1px) !important;

            box-shadow:
                0 8px 24px rgba(22,163,74,.34) !important;
        }


        /* =====================================================
           HOME SEARCH BUTTON
           ===================================================== */

        html.r34-home
        input[type="submit"].r34-search-button {

            margin-left:
                14px !important;

            margin-top:
                14px !important;
        }


        /* =====================================================
           HOME NAVIGATION
           ===================================================== */

        html.r34-home
        #static-index > #links {

            order:
                9999 !important;

            margin-top:
                auto !important;

            margin-bottom:
                20px !important;

            padding-top:
                24px !important;

            text-align:
                center !important;
        }

        html.r34-home #links a,
        html.r34-home #links a:visited {

            color:
                #8e949d !important;

            text-decoration:
                none !important;

            margin-left:
                9px !important;

            margin-right:
                9px !important;

            font-size:
                15px !important;

            font-weight:
                500 !important;
        }

        html.r34-home #links a:hover {

            color:
                #c5cad1 !important;
        }


        /* =====================================================
           POST PAGES
           ===================================================== */

        html.r34-post-page #content {

            position:
                relative !important;

            clear:
                both !important;

            box-sizing:
                border-box !important;

            color:
                #c9cdd3 !important;
        }


        /* =====================================================
           MAIN POST SEARCH
           ===================================================== */

        html.r34-post-list
        form.r34-main-search,

        html.r34-post-view
        form.r34-main-search {

            position:
                static !important;

            clear:
                both !important;

            display:
                flex !important;

            flex-wrap:
                wrap !important;

            align-items:
                center !important;

            gap:
                12px !important;

            margin-top:
                12px !important;

            margin-bottom:
                24px !important;

            padding:
                0 !important;

            box-sizing:
                border-box !important;
        }


        /* =====================================================
           POST SEARCH INPUT
           ===================================================== */

        html.r34-post-list
        input[name="tags"],

        html.r34-post-view
        input[name="tags"] {

            box-sizing:
                border-box !important;

            width:
                min(560px, 65vw) !important;

            min-width:
                280px !important;

            height:
                60px !important;

            padding:
                0 20px !important;

            margin:
                0 !important;

            background:
                #15181d !important;

            background-color:
                #15181d !important;

            color:
                #e3e6eb !important;

            border:
                1px solid #303640 !important;

            border-radius:
                14px !important;

            font-size:
                17px !important;

            font-weight:
                400 !important;

            line-height:
                1.2 !important;

            outline:
                none !important;
        }


        /* =====================================================
           POST LIST
           ===================================================== */

        html.r34-post-list
        #post-list {

            position:
                relative !important;

            clear:
                both !important;

            box-sizing:
                border-box !important;

            margin-top:
                18px !important;
        }

        html.r34-post-list
        #content
        .image-list {

            position:
                relative !important;

            clear:
                both !important;

            margin-top:
                20px !important;

            color:
                #c9cdd3 !important;
        }

        html.r34-post-list
        #content
        .image-list
        .thumb {

            position:
                relative !important;
        }

        html.r34-post-list
        #content
        .image-list
        .thumb
        img {

            border-radius:
                8px !important;
        }


        /* =====================================================
           SIDEBAR
           ===================================================== */

        html.r34-post-page
        .sidebar {

            width:
                300px !important;

            min-width:
                300px !important;

            box-sizing:
                border-box !important;

            background:
                #111419 !important;

            color:
                #c9cdd3 !important;

            border:
                1px solid #242a32 !important;

            border-radius:
                12px !important;

            padding:
                12px !important;

            flex-shrink:
                0 !important;
        }

        html.r34-post-page
        #tag-sidebar {

            width:
                100% !important;

            box-sizing:
                border-box !important;

            background:
                transparent !important;

            color:
                #c9cdd3 !important;
        }


        /* =====================================================
           SIDEBAR HEADER
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        h6 {

            color:
                #d8dde4 !important;

            background:
                #15181d !important;

            border-color:
                #292f37 !important;

            font-size:
                13px !important;

            font-weight:
                700 !important;

            padding:
                7px 9px !important;

            border-radius:
                7px !important;
        }


        /* =====================================================
           TAGS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        li[class*="tag-type-"] {

            color:
                #c9cdd3 !important;

            background:
                transparent !important;
        }

        html.r34-post-page
        #tag-sidebar
        li[class*="tag-type-"]
        a {

            font-size:
                15px !important;

            font-weight:
                500 !important;
        }


        /* =====================================================
           TAG COLORS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        .tag-type-artist,
        html.r34-post-page
        #tag-sidebar
        .tag-type-artist
        a {

            color:
                #fca5a5 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-character,
        html.r34-post-page
        #tag-sidebar
        .tag-type-character
        a {

            color:
                #86efac !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-copyright,
        html.r34-post-page
        #tag-sidebar
        .tag-type-copyright
        a {

            color:
                #f9a8d4 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-metadata,
        html.r34-post-page
        #tag-sidebar
        .tag-type-metadata
        a {

            color:
                #fde047 !important;
        }

        html.r34-post-page
        #tag-sidebar
        .tag-type-general,
        html.r34-post-page
        #tag-sidebar
        .tag-type-general
        a {

            color:
                #93c5fd !important;
        }


        /* =====================================================
           TAG COUNTS
           ===================================================== */

        html.r34-post-page
        #tag-sidebar
        .r34-tag-count {

            display:
                inline-block !important;

            margin-left:
                6px !important;

            color:
                #9da5af !important;

            font-size:
                13px !important;

            font-weight:
                500 !important;
        }


        /* =====================================================
           SIDEBAR SEARCH INPUT
           ===================================================== */

        html.r34-post-page
        div.tag-search
        input[type="text"] {

            width:
                100% !important;

            min-width:
                0 !important;

            height:
                40px !important;

            box-sizing:
                border-box !important;

            padding:
                0 10px !important;

            margin:
                0 !important;

            background:
                #15181d !important;

            color:
                #d9dde3 !important;

            border:
                1px solid #303640 !important;

            border-radius:
                9px !important;

            font-size:
                14px !important;
        }


        /* =====================================================
           SIDEBAR SEARCH BUTTON
           ===================================================== */

        html.r34-post-page
        div.tag-search
        input[type="submit"].r34-sidebar-search-button {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            box-sizing:
                border-box !important;

            width:
                180px !important;

            min-width:
                180px !important;

            height:
                60px !important;

            min-height:
                60px !important;

            padding:
                0 34px !important;

            margin:
                12px 0 0 0 !important;

            border:
                none !important;

            border-radius:
                9999px !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a,
                    #15803d
                ) !important;

            color:
                #ffffff !important;

            font-size:
                17px !important;

            font-weight:
                600 !important;

            line-height:
                1 !important;

            text-align:
                center !important;

            cursor:
                pointer !important;

            appearance:
                none !important;

            -webkit-appearance:
                none !important;

            box-shadow:
                0 5px 18px rgba(22,163,74,.24) !important;
        }

        html.r34-post-page
        div.tag-search
        input[type="submit"].r34-sidebar-search-button:hover {

            filter:
                brightness(1.08) !important;

            transform:
                translateY(-1px) !important;

            box-shadow:
                0 8px 24px rgba(22,163,74,.34) !important;
        }


        /* =====================================================
           PREVIOUS / NEXT
           ===================================================== */

        html.r34-modern
        .r34-prev-next {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            min-height:
                38px !important;

            padding:
                0 14px !important;

            color:
                #4ade80 !important;

            background:
                #111419 !important;

            border:
                1px solid #245a34 !important;

            border-radius:
                9px !important;

            font-size:
                14px !important;

            font-weight:
                600 !important;

            line-height:
                1 !important;

            text-decoration:
                none !important;

            transition:
                color .15s ease,
                background-color .15s ease,
                border-color .15s ease,
                box-shadow .15s ease,
                transform .15s ease !important;
        }

        html.r34-modern
        .r34-prev-next:hover {

            color:
                #bbf7d0 !important;

            background:
                #17231b !important;

            border-color:
                #3d9550 !important;

            box-shadow:
                0 0 12px rgba(34,197,94,.20) !important;

            transform:
                translateY(-1px) !important;
        }


        /* =====================================================
           PAGINATOR
           ===================================================== */

        html.r34-modern
        #paginator {

            clear:
                both !important;

            margin-top:
                28px !important;

            margin-bottom:
                28px !important;

            color:
                #9da5af !important;

            text-align:
                center !important;
        }

        html.r34-modern
        #paginator
        .pagination {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            flex-wrap:
                wrap !important;

            gap:
                6px !important;

            padding:
                6px !important;

            background:
                #111419 !important;

            border:
                1px solid #245a34 !important;

            border-radius:
                12px !important;

            box-shadow:
                0 0 0 1px rgba(34,197,94,.03),
                0 0 16px rgba(34,197,94,.12),
                inset 0 1px 0 rgba(255,255,255,.02) !important;
        }

        html.r34-modern
        #paginator
        .pagination
        a {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            box-sizing:
                border-box !important;

            min-width:
                38px !important;

            height:
                38px !important;

            padding:
                0 11px !important;

            border:
                1px solid #292f37 !important;

            border-radius:
                9px !important;

            background:
                #181c22 !important;

            color:
                #9da5af !important;

            font-size:
                14px !important;

            font-weight:
                600 !important;

            line-height:
                1 !important;

            text-decoration:
                none !important;
        }

        html.r34-modern
        #paginator
        .pagination
        a:hover {

            color:
                #e3e8ed !important;

            background:
                #1b2820 !important;

            border-color:
                #357546 !important;

            box-shadow:
                0 0 10px rgba(34,197,94,.14) !important;

            transform:
                translateY(-1px) !important;
        }

        html.r34-modern
        #paginator
        .pagination
        b,
        html.r34-modern
        #paginator
        .pagination
        strong {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            box-sizing:
                border-box !important;

            min-width:
                38px !important;

            height:
                38px !important;

            padding:
                0 11px !important;

            border:
                1px solid #22c55e !important;

            border-radius:
                9px !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a
                ) !important;

            color:
                #ffffff !important;

            font-size:
                14px !important;

            font-weight:
                700 !important;

            line-height:
                1 !important;

            box-shadow:
                0 0 12px rgba(34,197,94,.26) !important;
        }


        /* =====================================================
           MANUAL PAGE FORM
           ===================================================== */

        html.r34-modern
        #paginator
        form.r34-manual-page-form {

            display:
                inline-flex !important;

            flex-direction:
                row !important;

            align-items:
                center !important;

            justify-content:
                flex-start !important;

            flex-wrap:
                nowrap !important;

            gap:
                6px !important;

            width:
                auto !important;

            height:
                38px !important;

            margin:
                0 !important;

            padding:
                0 !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            border:
                none !important;

            box-shadow:
                none !important;
        }


        /* =====================================================
           MANUAL PAGE INPUT
           ===================================================== */

        html.r34-modern
        #paginator
        input.r34-manual-page-input {

            display:
                inline-block !important;

            box-sizing:
                border-box !important;

            width:
                78px !important;

            min-width:
                78px !important;

            height:
                38px !important;

            padding:
                0 9px !important;

            margin:
                0 !important;

            background:
                #181c22 !important;

            background-color:
                #181c22 !important;

            background-image:
                none !important;

            color:
                #dce2e8 !important;

            border:
                1px solid #303640 !important;

            border-radius:
                9px !important;

            outline:
                none !important;

            box-shadow:
                none !important;

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            font-size:
                14px !important;

            font-weight:
                500 !important;

            line-height:
                38px !important;

            text-align:
                center !important;

            appearance:
                none !important;

            -webkit-appearance:
                none !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-input:hover {

            background:
                #1b2027 !important;

            background-color:
                #1b2027 !important;

            border-color:
                #3b424c !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-input:focus {

            background:
                #1b2027 !important;

            background-color:
                #1b2027 !important;

            border-color:
                #22a04d !important;

            box-shadow:
                0 0 0 3px rgba(34,197,94,.10) !important;
        }


        /* =====================================================
           MANUAL PAGE GO BUTTON
           ===================================================== */

        html.r34-modern
        #paginator
        input.r34-manual-page-button,
        html.r34-modern
        #paginator
        button.r34-manual-page-button {

            display:
                inline-flex !important;

            align-items:
                center !important;

            justify-content:
                center !important;

            box-sizing:
                border-box !important;

            flex:
                0 0 auto !important;

            width:
                58px !important;

            min-width:
                58px !important;

            height:
                38px !important;

            min-height:
                38px !important;

            padding:
                0 12px !important;

            margin:
                0 !important;

            background:
                linear-gradient(
                    135deg,
                    #22c55e,
                    #16a34a
                ) !important;

            color:
                #ffffff !important;

            border:
                1px solid #23743c !important;

            border-radius:
                9px !important;

            outline:
                none !important;

            box-shadow:
                0 3px 10px rgba(22,163,74,.18) !important;

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            font-size:
                14px !important;

            font-weight:
                600 !important;

            line-height:
                1 !important;

            text-align:
                center !important;

            cursor:
                pointer !important;

            appearance:
                none !important;

            -webkit-appearance:
                none !important;
        }

        html.r34-modern
        #paginator
        input.r34-manual-page-button:hover,
        html.r34-modern
        #paginator
        button.r34-manual-page-button:hover {

            filter:
                brightness(1.08) !important;

            transform:
                translateY(-1px) !important;

            box-shadow:
                0 5px 16px rgba(22,163,74,.30) !important;
        }


        /* =====================================================
           PAGEID

           Именно:
           <input type="text" id="pageid"
                  placeholder="page">
           ===================================================== */

        html.r34-modern
        input#pageid {

            display:
                inline-block !important;

            box-sizing:
                border-box !important;

            width:
                82px !important;

            min-width:
                82px !important;

            height:
                38px !important;

            padding:
                0 10px !important;

            margin:
                0 !important;

            background:
                #181c22 !important;

            background-color:
                #181c22 !important;

            background-image:
                none !important;

            color:
                #dce2e8 !important;

            border:
                1px solid #303640 !important;

            border-radius:
                9px !important;

            outline:
                none !important;

            box-shadow:
                none !important;

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            font-size:
                14px !important;

            font-weight:
                500 !important;

            line-height:
                38px !important;

            text-align:
                center !important;

            vertical-align:
                middle !important;

            appearance:
                none !important;

            -webkit-appearance:
                none !important;

            transition:
                background-color .15s ease,
                border-color .15s ease,
                box-shadow .15s ease !important;
        }


        /* Убираем зелёный фон при наведении */

        html.r34-modern
        input#pageid:hover {

            background:
                #1b2027 !important;

            background-color:
                #1b2027 !important;

            background-image:
                none !important;

            border-color:
                #3b424c !important;
        }


        /* Зелёная подсветка только при фокусе */

        html.r34-modern
        input#pageid:focus {

            background:
                #181c22 !important;

            background-color:
                #181c22 !important;

            background-image:
                none !important;

            color:
                #e3e8ed !important;

            border-color:
                #22a04d !important;

            outline:
                none !important;

            box-shadow:
                0 0 0 3px rgba(34,197,94,.10) !important;
        }


        /* Placeholder */

        html.r34-modern
        input#pageid::placeholder {

            color:
                #737983 !important;

            opacity:
                1 !important;
        }


        /* =====================================================
           COMMENTS
           ===================================================== */

        html.r34-post-view
        #comment-list {

            box-sizing:
                border-box !important;

            width:
                100% !important;

            margin-top:
                28px !important;

            margin-bottom:
                28px !important;

            padding:
                20px !important;

            background:
                #111419 !important;

            border:
                1px solid #242a32 !important;

            border-radius:
                14px !important;

            color:
                #c9cdd3 !important;

            box-shadow:
                0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-post-view
        #comment-list::before {

            content:
                "Comments" !important;

            display:
                block !important;

            margin-bottom:
                16px !important;

            padding-bottom:
                12px !important;

            border-bottom:
                1px solid #242a32 !important;

            color:
                #e0e4e9 !important;

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            font-size:
                20px !important;

            font-weight:
                700 !important;
        }

        html.r34-post-view
        #comment-list
        > div[id^="c"] {

            box-sizing:
                border-box !important;

            margin:
                0 0 12px 0 !important;

            padding:
                14px 16px !important;

            background:
                #15181d !important;

            border:
                1px solid #292f37 !important;

            border-radius:
                10px !important;

            color:
                #c9cdd3 !important;
        }

        html.r34-post-view
        #comment-list
        > div[id^="c"]:hover {

            background:
                #181b21 !important;

            border-color:
                #353c46 !important;
        }

        html.r34-post-view
        #comment-list
        > div[id^="c"] p {

            color:
                #c9cdd3 !important;

            font-size:
                15px !important;

            line-height:
                1.6 !important;
        }


        /* =====================================================
           HEADINGS
           ===================================================== */

        html.r34-modern h1 {

            font-size:
                30px !important;

            line-height:
                1.2 !important;

            font-weight:
                700 !important;
        }

        html.r34-modern h2 {

            font-size:
                26px !important;

            line-height:
                1.25 !important;

            font-weight:
                700 !important;
        }

        html.r34-modern h3 {

            font-size:
                22px !important;

            line-height:
                1.3 !important;

            font-weight:
                700 !important;
        }

        html.r34-modern h4 {

            font-size:
                19px !important;

            font-weight:
                600 !important;
        }


        /* =====================================================
           PLACEHOLDERS
           ===================================================== */

        html.r34-modern
        input::placeholder,
        html.r34-modern
        textarea::placeholder {

            font-family:
                "Inter",
                system-ui,
                sans-serif !important;

            color:
                #737983 !important;
        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 900px) {

            html.r34-post-page
            .sidebar {

                width:
                    260px !important;

                min-width:
                    260px !important;
            }
        }


        @media (max-width: 700px) {

            /* HOME */

            html.r34-home
            #static-index
            p.index-header
            img {

                width:
                    320px !important;

                max-width:
                    75vw !important;
            }

            html.r34-home
            input[type="text"],
            html.r34-home
            input[type="search"] {

                width:
                    90vw !important;

                min-width:
                    0 !important;

                height:
                    56px !important;

                font-size:
                    16px !important;
            }

            html.r34-home
            input[type="submit"]
            .r34-search-button {

                width:
                    160px !important;

                min-width:
                    160px !important;

                height:
                    56px !important;

                min-height:
                    56px !important;

                margin-left:
                    8px !important;

                margin-top:
                    14px !important;

                font-size:
                    16px !important;
            }

            html.r34-home #links a {

                font-size:
                    14px !important;

                margin-left:
                    5px !important;

                margin-right:
                    5px !important;
            }


            /* POSTS */

            html.r34-post-page
            input[name="tags"] {

                width:
                    100% !important;

                min-width:
                    0 !important;

                height:
                    56px !important;
            }

            html.r34-post-page
            form.r34-main-search {

                width:
                    100% !important;
            }

            html.r34-post-page
            form.r34-main-search
            input[type="submit"]
            .r34-search-button {

                width:
                    100% !important;

                min-width:
                    0 !important;

                margin-left:
                    0 !important;

                margin-top:
                    0 !important;
            }

            html.r34-post-page
            .sidebar {

                width:
                    100% !important;

                min-width:
                    0 !important;
            }


            /* SIDEBAR SEARCH */

            html.r34-post-page
            div.tag-search
            input[type="submit"]
            .r34-sidebar-search-button {

                width:
                    100% !important;

                min-width:
                    0 !important;

                height:
                    56px !important;

                min-height:
                    56px !important;

                font-size:
                    16px !important;
            }


            /* MANUAL PAGE */

            html.r34-modern
            #paginator
            form.r34-manual-page-form {

                height:
                    34px !important;

                gap:
                    4px !important;
            }

            html.r34-modern
            #paginator
            input.r34-manual-page-input {

                width:
                    70px !important;

                min-width:
                    70px !important;

                height:
                    34px !important;

                font-size:
                    13px !important;

                line-height:
                    34px !important;
            }

            html.r34-modern
            #paginator
            input.r34-manual-page-button,
            html.r34-modern
            #paginator
            button.r34-manual-page-button {

                width:
                    54px !important;

                min-width:
                    54px !important;

                height:
                    34px !important;

                min-height:
                    34px !important;

                font-size:
                    13px !important;
            }


            /* PAGEID */

            html.r34-modern
            input#pageid {

                width:
                    70px !important;

                min-width:
                    70px !important;

                height:
                    34px !important;

                font-size:
                    13px !important;

                line-height:
                    34px !important;
            }


            /* PAGINATOR */

            html.r34-modern
            #paginator
            .pagination {

                gap:
                    4px !important;

                padding:
                    5px !important;

                max-width:
                    96vw !important;
            }

            html.r34-modern
            #paginator
            .pagination
            a {

                min-width:
                    34px !important;

                height:
                    34px !important;

                padding:
                    0 8px !important;

                font-size:
                    13px !important;
            }

            html.r34-modern
            #paginator
            .pagination
            b,
            html.r34-modern
            #paginator
            .pagination
            strong {

                min-width:
                    34px !important;

                height:
                    34px !important;

                font-size:
                    13px !important;
            }


            /* COMMENTS */

            html.r34-post-view
            #comment-list {

                margin-top:
                    20px !important;

                margin-bottom:
                    20px !important;

                padding:
                    14px !important;

                border-radius:
                    12px !important;
            }

            html.r34-post-view
            #comment-list::before {

                font-size:
                    18px !important;
            }

            html.r34-post-view
            #comment-list
            > div[id^="c"] {

                padding:
                    12px !important;
            }


            /* STATUS NOTICE */

            html.r34-modern
            div.status-notice {

                margin:
                    10px 0 !important;

                padding:
                    12px 14px !important;

                border-radius:
                    10px !important;

                font-size:
                    14px !important;
            }


            /* NAV LINKS CONTAINER */

            html.r34-modern
            #navlinksContainer {

                border-radius:
                    11px !important;
            }
        }

    `);


    /*
     * =========================================
     * MARK MAIN SEARCH FORM
     * =========================================
     */

    function markMainSearchForm() {

        if (!isPostPage) {
            return;
        }

        const inputs =
            document.querySelectorAll(
                '#content input[name="tags"]'
            );

        for (const input of inputs) {

            const form =
                input.closest('form');

            if (form) {

                form.classList.add(
                    'r34-main-search'
                );
            }
        }
    }


    /*
     * =========================================
     * MARK SEARCH BUTTONS
     * =========================================
     */

    function markSearchButtons() {

        /*
         * HOME
         */

        if (isHomePage) {

            const buttons =
                document.querySelectorAll(
                    '#static-index input[type="submit"]'
                );

            for (const button of buttons) {

                button.classList.add(
                    'r34-search-button'
                );
            }
        }


        /*
         * POST PAGES
         */

        if (isPostPage) {

            const forms =
                document.querySelectorAll(
                    'form.r34-main-search'
                );

            for (const form of forms) {

                const buttons =
                    form.querySelectorAll(
                        'input[type="submit"]'
                    );

                for (const button of buttons) {

                    button.classList.add(
                        'r34-search-button'
                    );
                }
            }


            /*
             * SIDEBAR
             */

            const sidebarButtons =
                document.querySelectorAll(
                    'div.tag-search input[type="submit"]'
                );

            for (const button of sidebarButtons) {

                button.classList.add(
                    'r34-sidebar-search-button'
                );
            }
        }
    }


    /*
     * =========================================
     * TOP NAVBAR
     * =========================================
     */

    function markTopNavbar() {

        const navNames =
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

        const links =
            document.querySelectorAll('a');

        for (const link of links) {

            const text =
                link.textContent
                    .replace(/\s+/g, ' ')
                    .trim();

            if (!navNames.has(text)) {
                continue;
            }

            const rect =
                link.getBoundingClientRect();

            if (
                rect.top > 250 ||
                rect.left < 0 ||
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


    /*
     * =========================================
     * PREVIOUS / NEXT
     * =========================================
     */

    function markPreviousNext() {

        const links =
            document.querySelectorAll('a');

        for (const link of links) {

            const text =
                link.textContent
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();

            if (
                text !== 'previous' &&
                text !== 'next'
            ) {
                continue;
            }

            link.classList.add(
                'r34-prev-next'
            );
        }
    }


    /*
     * =========================================
     * MANUAL PAGE CONTROLS
     * =========================================
     */

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

        for (const input of inputs) {

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

            const controls =
                form.querySelectorAll(
                    'input[type="submit"], input[type="button"], button'
                );

            for (const control of controls) {

                const value = (
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


    /*
     * =========================================
     * MARK PAGEID
     * =========================================
     */

    function markPageId() {

        const pageIdInputs =
            document.querySelectorAll(
                'input#pageid'
            );

        for (const input of pageIdInputs) {

            input.classList.add(
                'r34-pageid'
            );
        }
    }


    /*
     * =========================================
     * TAG COUNTS
     * =========================================
     */

    function wrapTagCounts() {

        if (!isPostPage) {
            return;
        }

        const tagRows =
            document.querySelectorAll(
                '#tag-sidebar li[class*="tag-type-"]'
            );

        for (const row of tagRows) {

            if (
                row.dataset.r34CountFixed === '1'
            ) {
                continue;
            }

            const childNodes =
                Array.from(
                    row.childNodes
                );

            for (const node of childNodes) {

                if (
                    node.nodeType !==
                    Node.TEXT_NODE
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

                row.replaceChild(
                    count,
                    node
                );
            }

            row.dataset.r34CountFixed =
                '1';
        }
    }


    /*
     * =========================================
     * FILTER AI POSTS
     * =========================================
     */

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

        while (walker.nextNode()) {

            nodes.push(
                walker.currentNode
            );
        }

        for (const node of nodes) {

            if (
                node.nodeValue.includes(
                    'Filter AI posts'
                )
            ) {

                node.nodeValue =
                    node.nodeValue.replace(
                        /Filter AI posts/g,
                        'Make Sam Altman EVIL'
                    );
            }
        }
    }


    /*
     * =========================================
     * INITIALIZATION
     * =========================================
     */

    function initialize() {

        markMainSearchForm();
        markSearchButtons();
        markTopNavbar();
        markPreviousNext();
        markManualPageControls();
        markPageId();
        wrapTagCounts();
        replaceFilterAIText();


        setTimeout(() => {

            markMainSearchForm();
            markSearchButtons();
            markTopNavbar();
            markPreviousNext();
            markManualPageControls();
            markPageId();
            wrapTagCounts();
            replaceFilterAIText();

        }, 300);


        setTimeout(() => {

            markMainSearchForm();
            markSearchButtons();
            markTopNavbar();
            markPreviousNext();
            markManualPageControls();
            markPageId();
            wrapTagCounts();
            replaceFilterAIText();

        }, 1000);


        setTimeout(() => {

            markMainSearchForm();
            markSearchButtons();
            markTopNavbar();
            markPreviousNext();
            markManualPageControls();
            markPageId();
            wrapTagCounts();
            replaceFilterAIText();

        }, 2500);
    }


    /*
     * =========================================
     * DOM READY
     * =========================================
     */

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );

    } else {

        initialize();
    }


    /*
     * =========================================
     * DYNAMIC CONTENT OBSERVER
     * =========================================
     */

    function startObserver() {

        if (!document.body) {
            return;
        }

        const observer =
            new MutationObserver(() => {

                markMainSearchForm();
                markSearchButtons();
                markTopNavbar();
                markPreviousNext();
                markManualPageControls();
                markPageId();
                wrapTagCounts();
                replaceFilterAIText();

            });

        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true,
                characterData: true
            }
        );
    }


    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            startObserver,
            { once: true }
        );

    } else {

        startObserver();
    }

})();

// ==UserScript==
// @name         Rule34.xxx — Modern UI
// @namespace    https://rule34.xxx/
// @version      4.2.9
// @description  Modernize Rule34.xxx interface
// @author       RukoBlood
// @match        https://rule34.xxx/*
// @match        https://www.rule34.xxx/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/RukoBlood/Rule34-Modrinthifier/refs/heads/main/Rule%2034%20Modrinthifier.user.js
// @downloadURL  https://raw.githubusercontent.com/RukoBlood/Rule34-Modrinthifier/refs/heads/main/Rule%2034%20Modrinthifier.user.js
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

    const isPostPage = page === 'post' && (section === 'list' || section === 'view');

    const isPostListPage = page === 'post' && section === 'list';

    const isPostViewPage = page === 'post' && section === 'view';

    const isPostAddPage = page === 'post' && section === 'add';

    const isForumListPage = page === 'forum' && section === 'list';

    const isForumViewPage = page === 'forum' && section === 'view';

    const isAccountProfilePage = page === 'account' && section === 'profile';

    const isIcamePage = page === 'icame';

    const isPoolListPage = page === 'pool' && section === 'list';

    const isPoolShowPage = page === 'pool' && section === 'show';

    const isPoolAddPage = page === 'pool' && section === 'add';

    const isTagsListPage = page === 'tags' && section === 'list';

    const isArtistListPage = page === 'artist' && section === 'list';

    const isArtistCreatePage = page === 'artist' && section === 'create';

    const isArtistUpdatePage = page === 'artist' && section === 'update';

    const isAliasListPage = page === 'alias' && section === 'list';

    const isAliasAddPage = page === 'alias' && section === 'add';

    const isCommentListPage = page === 'comment' && section === 'list';

    const isCommentUserPage = page === 'comment' && section === 'user';

    const isWikiListPage = page === 'wiki' && section === 'list';

    const isWikiCreatePage = page === 'wiki' && section === 'create';

    const isWikiViewPage = page === 'wiki' && section === 'view';

    const isWikiEditPage = page === 'wiki' && section === 'edit';

    const isWikiHistoryPage = page === 'wiki' && section === 'history';

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

    if (isPostAddPage)
        html.classList.add('r34-post-add');

    if (isForumListPage)
        html.classList.add('r34-forum-list');

    if (isForumViewPage)
        html.classList.add('r34-forum-view');

    if (isAccountProfilePage)
        html.classList.add('r34-account-profile');

    if (isIcamePage)
        html.classList.add('r34-icame');

    if (isPoolListPage)
        html.classList.add('r34-pool-list');

    if (isPoolShowPage)
        html.classList.add('r34-pool-show');

    if (isPoolAddPage)
        html.classList.add('r34-pool-add');

    if (isTagsListPage)
        html.classList.add('r34-tags-list');

    if (isArtistListPage)
        html.classList.add('r34-artist-list');

    if (isArtistCreatePage)
        html.classList.add('r34-artist-create');

    if (isArtistUpdatePage)
        html.classList.add('r34-artist-update');

    if (isAliasListPage)
        html.classList.add('r34-alias-list');

    if (isAliasAddPage)
        html.classList.add('r34-alias-add');

    if (isCommentListPage)
        html.classList.add('r34-comment-list');

    if (isCommentUserPage)
        html.classList.add('r34-comment-user');

    if (isWikiListPage)
        html.classList.add('r34-wiki-list');

    if (isWikiCreatePage)
        html.classList.add('r34-wiki-create');

    if (isWikiViewPage)
        html.classList.add('r34-wiki-view');

    if (isWikiEditPage)
        html.classList.add('r34-wiki-edit');

    if (isWikiHistoryPage)
        html.classList.add('r34-wiki-history');

    /* =========================================================
       LOAD INTER
       ========================================================= */

    function loadInter() {

        if (!document.head) {
            setTimeout(loadInter, 10);
            return;
        }

        if (document.getElementById('r34-modern-inter')) {
            return;
        }

        const link = document.createElement('link');

        link.id = 'r34-modern-inter';

        link.rel = 'stylesheet';

        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';

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

        /*=====================================================
         COMMENT FORM                                          *
         ===================================================== */

        html.r34-post-view #comment_form textarea {
            display:block !important;
            width:100% !important;
            min-height:150px !important;
            padding:14px 16px !important;
            box-sizing:border-box !important;

            background:#15181d !important;
            color:#dce2e8 !important;

            border:1px solid #303640 !important;
            border-radius:12px !important;

            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:15px !important;
            line-height:1.5 !important;

            resize:vertical !important;
            transition:border-color .15s ease, box-shadow .15s ease, background .15s ease !important;
        }

        html.r34-post-view #comment_form textarea:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12), 0 0 18px rgba(34,197,94,.12) !important;
        }

        html.r34-post-view #comment_form textarea::placeholder {
            color:#737983 !important;
        }

        html.r34-post-view #comment_form input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            min-width:140px !important;
            height:44px !important;
            padding:0 22px !important;
            margin-top:10px !important;

            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;

            border:1px solid #23743c !important;
            border-radius:9999px !important;

            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:15px !important;
            font-weight:600 !important;
            line-height:1 !important;

            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;

            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease, transform .15s ease, box-shadow .15s ease !important;
        }

        html.r34-post-view #comment_form input[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-post-view #comment_form input[type="submit"]:active {
            transform:translateY(0) !important;
            filter:brightness(.98) !important;
        }

        /*=====================================================
         EDIT FORM                                             *
         ===================================================== */

        html.r34-post-view #edit-form input[type="text"],
        html.r34-post-view #edit-form textarea {
            display:block !important;
            width:100% !important;
            min-height:44px !important;
            box-sizing:border-box !important;
            padding:11px 14px !important;
            margin:6px 0 12px !important;

            background:#15181d !important;
            color:#dce2e8 !important;

            border:1px solid #303640 !important;
            border-radius:10px !important;

            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:15px !important;
            line-height:1.4 !important;

            transition:border-color .15s ease,box-shadow .15s ease,background .15s ease !important;
        }

        html.r34-post-view #edit-form input[type="text"]:focus,
        html.r34-post-view #edit-form textarea:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12),0 0 18px rgba(34,197,94,.10) !important;
        }

        html.r34-post-view #edit-form input[type="text"]::placeholder,
        html.r34-post-view #edit-form textarea::placeholder {
            color:#737983 !important;
        }

        /* RATING */
        html.r34-post-view #edit-form input[type="radio"] {
            width:18px !important;
            height:18px !important;
            margin:0 7px 0 0 !important;
            vertical-align:middle !important;

            accent-color:#22c55e !important;
            cursor:pointer !important;
        }

        /* SAVE / UPDATE BUTTON */
        html.r34-post-view #edit-form input[type="submit"],
        html.r34-post-view #edit-form button[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            min-width:140px !important;
            height:44px !important;
            padding:0 24px !important;
            margin-top:8px !important;

            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;

            border:1px solid #23743c !important;
            border-radius:9999px !important;

            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:15px !important;
            font-weight:600 !important;
            line-height:1 !important;

            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;

            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease,transform .15s ease,box-shadow .15s ease !important;
        }

        html.r34-post-view #edit-form input[type="submit"]:hover,
        html.r34-post-view #edit-form button[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-post-view #edit-form input[type="submit"]:active,
        html.r34-post-view #edit-form button[type="submit"]:active {
            transform:translateY(0) !important;
        }

        /*=====================================================
         THUMBNAILS                                            *
         ===================================================== */

        /* POST LIST THUMBNAILS */
        html.r34-post-list span.thumb {
            border-radius:10px !important;
            overflow:visible !important;
        }

        html.r34-post-list span.thumb img.preview {
            border-radius:10px !important;
        }

        /* ANIMATED / WEBM THUMBNAILS */
        html.r34-post-list .webm-thumb {
            border-width:3px !important;
            border-style:solid !important;
            border-color:#93c5fd !important;

            border-radius:10px !important;

            box-shadow:
            0 0 6px rgba(147,197,253,.65),
            0 0 14px rgba(147,197,253,.40),
            0 0 24px rgba(147,197,253,.18) !important;
        }

        /*=====================================================
         UPLOAD FORM                                           *
         ===================================================== */
        /* POST ADD — UPLOAD FORM */

        /* TEXTBOXES */
        html.r34-post-add form[enctype="multipart/form-data"] input[type="text"],
        html.r34-post-add form[enctype="multipart/form-data"] textarea {
            box-sizing:border-box !important;
            background:#15181d !important;
            color:#dce2e8 !important;
            border:1px solid #303640 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            transition:border-color .15s ease,box-shadow .15s ease !important;
        }

        html.r34-post-add form[enctype="multipart/form-data"] input[type="text"]:focus,
        html.r34-post-add form[enctype="multipart/form-data"] textarea:focus {
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12) !important;
        }

        /* CHOOSE FILE BUTTON */
        html.r34-post-add input[type="file"] {
            color:#c9cdd3 !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
        }

        html.r34-post-add input[type="file"]::file-selector-button {
            box-sizing:border-box !important;
            min-height:44px !important;
            padding:0 22px !important;
            margin-right:12px !important;

            background:
            linear-gradient(#15181d,#15181d) padding-box,
                linear-gradient(135deg,#86efac,#22c55e,#15803d) border-box !important;
                color:#e3e6eb !important;

                border:1px solid transparent !important;
                border-radius:9999px !important;

                font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                font-size:14px !important;
                font-weight:600 !important;

                cursor:pointer !important;
                appearance:none !important;
                -webkit-appearance:none !important;

                box-shadow:
                0 0 10px rgba(34,197,94,.24),
                0 0 18px rgba(34,197,94,.12) !important;

                transition:filter .15s ease,box-shadow .15s ease,transform .15s ease !important;
        }

        html.r34-post-add input[type="file"]::file-selector-button:hover {
            background:
            linear-gradient(#1b211d,#1b211d) padding-box,
                linear-gradient(135deg,#bbf7d0,#22c55e,#15803d) border-box !important;
                box-shadow:
                0 0 12px rgba(34,197,94,.38),
                0 0 22px rgba(34,197,94,.20) !important;
                transform:translateY(-1px) !important;
        }

        /* UPLOAD BUTTON */
        html.r34-post-add form[enctype="multipart/form-data"] input[type="submit"],
        html.r34-post-add form[enctype="multipart/form-data"] button[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            box-sizing:border-box !important;
            min-width:180px !important;
            height:60px !important;
            padding:0 30px !important;
            margin:10px 0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;
            border:1px solid #23743c !important;
            border-radius:9999px !important;

            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:16px !important;
            font-weight:600 !important;
            line-height:1 !important;

            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;

            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease,transform .15s ease,box-shadow .15s ease !important;
        }

        html.r34-post-add form[enctype="multipart/form-data"] input[type="submit"]:hover,
        html.r34-post-add form[enctype="multipart/form-data"] button[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        /* UPLOAD TAG AUTOCOMPLETE */
        html.r34-post-add .awesomplete > ul {
            box-sizing:border-box !important;
            width:100% !important;
            min-width:0 !important;
            max-width:min(620px,90vw) !important;
            max-height:300px !important;

            margin:8px 0 0 !important;
            padding:6px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;
            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:
            0 0 0 1px rgba(34,197,94,.04),
                0 0 16px rgba(34,197,94,.14),
                0 10px 24px rgba(0,0,0,.38) !important;

                overflow-x:hidden !important;
                overflow-y:auto !important;
                z-index:99999 !important;
        }

        html.r34-post-add .awesomplete > ul[hidden],
        html.r34-post-add .awesomplete > ul:empty {
            display:none !important;
        }

        html.r34-post-add .awesomplete > ul > li {
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

        html.r34-post-add .awesomplete > ul > li:hover,
        html.r34-post-add .awesomplete > ul > li[aria-selected="true"] {
            background:#17251c !important;
            color:#e8f5eb !important;
            border-color:#2f7942 !important;
            box-shadow:inset 3px 0 0 #22c55e !important;
        }

        html.r34-post-add .awesomplete mark {
            background:rgba(34,197,94,.18) !important;
            color:#9df2b1 !important;
            border-radius:4px !important;
            padding:1px 3px !important;
            font-weight:700 !important;
        }

        /*=====================================================
         FORUM PAGE                                            *
         ===================================================== */

        /* FORUM LIST */

        /* TABLE */
        html.r34-forum-list table.highlightable {
            width:100% !important;
            box-sizing:border-box !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            border:1px solid #242a32 !important;
            border-radius:14px !important;

            color:#c9cdd3 !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-forum-list table.highlightable th {
            padding:12px 14px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border-bottom:1px solid #303640 !important;

            font-size:14px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-forum-list table.highlightable td {
            padding:11px 14px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border-bottom:1px solid #20252c !important;

            font-size:14px !important;
        }

        html.r34-forum-list table.highlightable tr:last-child td {
            border-bottom:none !important;
        }

        html.r34-forum-list table.highlightable tr:hover td {
            background:#151b17 !important;
        }

        html.r34-forum-list table.highlightable a {
            color:#aeb4bd !important;
            text-decoration:none !important;
        }

        html.r34-forum-list table.highlightable a:hover {
            color:#86efac !important;
        }


        /* FORUM SEARCH + CREATE TOPIC FIELDS */
        html.r34-forum-list #content input[type="text"],
        html.r34-forum-list #content textarea {
            box-sizing:border-box !important;

            background:#15181d !important;
            color:#dce2e8 !important;

            border:1px solid #303640 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;

            transition:border-color .15s ease,box-shadow .15s ease,background .15s ease !important;
        }

        html.r34-forum-list #content input[type="text"] {
            height:42px !important;
            padding:0 12px !important;
        }

        html.r34-forum-list #content textarea {
            min-height:150px !important;
            padding:11px 13px !important;
            resize:vertical !important;
        }

        html.r34-forum-list #content input[type="text"]:focus,
        html.r34-forum-list #content textarea:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12) !important;
        }


        /* SEARCH / CREATE TOPIC BUTTONS */
        html.r34-forum-list #content input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:140px !important;
            height:44px !important;
            padding:0 22px !important;
            margin:8px 0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;

            border:1px solid #23743c !important;
            border-radius:9999px !important;

            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;

            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;

            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease,transform .15s ease,box-shadow .15s ease !important;
        }

        html.r34-forum-list #content input[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-forum-list #content input[type="submit"]:active {
            transform:translateY(0) !important;
        }

        /* FORUM TABLE — SOLID GREEN LINES */
        html.r34-forum-list table.highlightable {
            border:1px solid #245a34 !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
        }

        html.r34-forum-list table.highlightable th,
        html.r34-forum-list table.highlightable td {
            border:none !important;
            border-bottom:1px solid #245a34 !important;
        }

        html.r34-forum-list table.highlightable tr:last-child td {
            border-bottom:none !important;
        }

        /* FORUM QUOTES */

        html.r34-forum-list .quote {
            box-sizing:border-box !important;
            margin:10px 0 !important;
            padding:10px 12px !important;

            background:#0d1110 !important;

            border:1px solid #245a34 !important;
            border-left:3px solid #22c55e !important;
            border-radius:9px !important;

            color:#9da5af !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;
            line-height:1.5 !important;

            box-shadow:0 0 10px rgba(34,197,94,.06) !important;
        }


        /* FORUM PAGINATOR */
        html.r34-forum-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:transparent !important;
            border:none !important;
            border-radius:12px !important;

            box-shadow:none !important;
            color:#9da5af !important;
        }

        /* PAGE LINKS */
        html.r34-forum-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-forum-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        /* CURRENT PAGE */
        html.r34-forum-list #paginator b,
        html.r34-forum-list #paginator strong,
        html.r34-forum-list #paginator span.current,
        html.r34-forum-list #paginator span.active,
        html.r34-forum-list #paginator span.selected,
        html.r34-forum-list #paginator .current,
        html.r34-forum-list #paginator .active,
        html.r34-forum-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /*=====================================================
         FORUM VIEW PAGE                                       *
         ===================================================== */

        html.r34-forum-view #content {
            color:#c9cdd3 !important;
        }

        /* Message block */
        html.r34-forum-view #content .forum-post,
        html.r34-forum-view #content .post {
            box-sizing:border-box !important;
            margin:0 0 14px !important;
            padding:16px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            color:#c9cdd3 !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* Author */
        html.r34-forum-view #content .forum-post .author,
        html.r34-forum-view #content .post .author {
            color:#86efac !important;
            font-weight:700 !important;
        }

        /* Data and shit */
        html.r34-forum-view #content .forum-post .date,
        html.r34-forum-view #content .post .date {
            color:#737983 !important;
            font-size:12px !important;
        }

        /* Message Text */
        html.r34-forum-view #content .forum-post .content,
        html.r34-forum-view #content .post .content {
            color:#dce2e8 !important;
            line-height:1.55 !important;
        }

        /* Links inside */
        html.r34-forum-view #content .forum-post a,
        html.r34-forum-view #content .post a {
            color:#86efac !important;
        }

        html.r34-forum-view #content .forum-post a:hover,
        html.r34-forum-view #content .post a:hover {
            color:#bbf7d0 !important;
        }

        html.r34-forum-view #content div.quote {
            box-sizing:border-box !important;
            margin:12px 0 !important;
            padding:12px 14px !important;
            background:#151b17 !important;
            color:#aeb7b0 !important;
            border:1px solid #245a34 !important;
            border-left:3px solid #22c55e !important;
            border-radius:10px !important;
            box-shadow:
            0 0 10px rgba(34,197,94,.08),
                inset 0 0 12px rgba(34,197,94,.025) !important;
                font-size:14px !important;
                line-height:1.5 !important;
        }

        html.r34-forum-view #content div.quote a {
            color:#86efac !important;
        }

        html.r34-forum-view #content div.quote a:hover {
            color:#bbf7d0 !important;
        }

        /* Edit / Reply blocks */
        html.r34-forum-view #content #edit,
        html.r34-forum-view #content #edit-form,
        html.r34-forum-view #content .edit,
        html.r34-forum-view #content .reply,
        html.r34-forum-view #content #reply {
            box-sizing:border-box !important;
            margin:16px 0 !important;
            padding:16px !important;
            background:#111419 !important;
            color:#c9cdd3 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* Text fields */
        html.r34-forum-view #content #edit input[type="text"],
        html.r34-forum-view #content #edit textarea,
        html.r34-forum-view #content #edit-form input[type="text"],
        html.r34-forum-view #content #edit-form textarea,
        html.r34-forum-view #content .reply input[type="text"],
        html.r34-forum-view #content .reply textarea,
        html.r34-forum-view #content #reply input[type="text"],
        html.r34-forum-view #content #reply textarea {
            box-sizing:border-box !important;
            width:100% !important;
            min-height:42px !important;
            padding:10px 13px !important;
            margin:6px 0 12px !important;
            background:#15181d !important;
            color:#dce2e8 !important;
            border:1px solid #303640 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            line-height:1.45 !important;
            transition:border-color .15s ease,box-shadow .15s ease,background .15s ease !important;
        }

        html.r34-forum-view #content #edit textarea,
        html.r34-forum-view #content #edit-form textarea,
        html.r34-forum-view #content .reply textarea,
        html.r34-forum-view #content #reply textarea {
            min-height:140px !important;
            resize:vertical !important;
        }

        html.r34-forum-view #content #edit input[type="text"]:focus,
        html.r34-forum-view #content #edit textarea:focus,
        html.r34-forum-view #content #edit-form input[type="text"]:focus,
        html.r34-forum-view #content #edit-form textarea:focus,
        html.r34-forum-view #content .reply input[type="text"]:focus,
        html.r34-forum-view #content .reply textarea:focus,
        html.r34-forum-view #content #reply input[type="text"]:focus,
        html.r34-forum-view #content #reply textarea:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12) !important;
        }

        /* Buttons */
        html.r34-forum-view #content #edit input[type="submit"],
        html.r34-forum-view #content #edit-form input[type="submit"],
        html.r34-forum-view #content .reply input[type="submit"],
        html.r34-forum-view #content #reply input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            min-width:140px !important;
            height:44px !important;
            padding:0 22px !important;
            margin-top:8px !important;
            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;
            border:1px solid #23743c !important;
            border-radius:9999px !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;
            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease,transform .15s ease,box-shadow .15s ease !important;
        }

        html.r34-forum-view #content #edit input[type="submit"]:hover,
        html.r34-forum-view #content #edit-form input[type="submit"]:hover,
        html.r34-forum-view #content .reply input[type="submit"]:hover,
        html.r34-forum-view #content #reply input[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] {
            box-sizing:border-box !important;
            width:100% !important;
            margin:16px 0 !important;
            padding:16px !important;
            background:#111419 !important;
            color:#c9cdd3 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] table {
            width:100% !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
            background:transparent !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] td {
            padding:4px 0 !important;
            border:none !important;
            background:transparent !important;
        }

        /* Заголовок */
        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] input[name="title"] {
            box-sizing:border-box !important;
            width:100% !important;
            height:42px !important;
            padding:0 13px !important;
            background:#15181d !important;
            color:#dce2e8 !important;
            border:1px solid #303640 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] input[name="title"]:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12) !important;
        }

        /* Текст поста */
        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] textarea[name="post"] {
            display:block !important;
            box-sizing:border-box !important;
            width:100% !important;
            min-height:150px !important;
            padding:11px 13px !important;
            margin:4px 0 !important;
            background:#15181d !important;
            color:#dce2e8 !important;
            border:1px solid #303640 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            line-height:1.5 !important;
            resize:vertical !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] textarea[name="post"]:focus {
            background:#181c22 !important;
            border-color:#22c55e !important;
            box-shadow:0 0 0 3px rgba(34,197,94,.12) !important;
        }

        /* Edit */
        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            min-width:140px !important;
            height:44px !important;
            padding:0 22px !important;
            margin-top:6px !important;
            background:linear-gradient(135deg,#22c55e,#16a34a,#15803d) !important;
            color:#fff !important;
            border:1px solid #23743c !important;
            border-radius:9999px !important;
            font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:600 !important;
            cursor:pointer !important;
            appearance:none !important;
            -webkit-appearance:none !important;
            box-shadow:0 5px 18px rgba(22,163,74,.24) !important;
            transition:filter .15s ease,transform .15s ease,box-shadow .15s ease !important;
        }

        html.r34-forum-view #content form[action*="forum"][action*="action=edit_post"] input[type="submit"]:hover {
            filter:brightness(1.08) !important;
            transform:translateY(-1px) !important;
            box-shadow:0 8px 24px rgba(22,163,74,.34) !important;
        }

        html.r34-forum-view #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;
            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;
            margin:28px auto !important;
            padding:6px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:12px !important;
            box-shadow:0 0 16px rgba(34,197,94,.12) !important;
            color:#9da5af !important;
        }

        html.r34-forum-view #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;
            background:#181c22 !important;
            color:#9da5af !important;
            border:1px solid #292f37 !important;
            border-radius:9px !important;
            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
            transition:
            background .15s ease,
            color .15s ease,
            border-color .15s ease,
            box-shadow .15s ease,
            transform .15s ease !important;
        }

        html.r34-forum-view #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;
            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        html.r34-forum-view #paginator b,
        html.r34-forum-view #paginator strong,
        html.r34-forum-view #paginator span.current,
        html.r34-forum-view #paginator span.active,
        html.r34-forum-view #paginator span.selected,
        html.r34-forum-view #paginator .current,
        html.r34-forum-view #paginator .active,
        html.r34-forum-view #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /* Forum — vertical separators */
        html.r34-forum-list #content table th,
        html.r34-forum-list #content table td {
            border-right:1px solid #245a34 !important;
        }

        html.r34-forum-list #content table th:last-child,
        html.r34-forum-list #content table td:last-child {
            border-right:none !important;
        }

        /*=====================================================
         PROFILE PAGE
         ===================================================== */

        /* PROFILE TABLES */
        html.r34-account-profile #content table {
            width:55% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            overflow:hidden !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-account-profile #content table th {
            padding:12px 14px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-account-profile #content table td {
            padding:11px 14px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            vertical-align:middle !important;
        }

        html.r34-account-profile #content table tr:last-child td {
            border-bottom:none !important;
        }

        html.r34-account-profile #content table tr:hover td {
            background:#151b17 !important;
        }


        /* THUMBNAILS */
        html.r34-account-profile #content span.thumb {
            display:inline-block !important;
            vertical-align:middle !important;
        }

        html.r34-account-profile #content span.thumb img.preview {
            display:block !important;
            border-radius:10px !important;
        }


        /* RECENT UPLOADS — KEEP THUMB + STATUS ALIGNED */
        html.r34-account-profile #content table td:has(span.thumb) {
            vertical-align:middle !important;
            white-space:nowrap !important;
        }

        html.r34-account-profile #content table td:has(span.thumb) span.thumb {
            margin-right:10px !important;
        }

        html.r34-account-profile #content table td:has(span.thumb) br {
            display:none !important;
        }


        /* STATUS TEXT */
        html.r34-account-profile #content table td:has(span.thumb) {
            line-height:1.35 !important;
        }

        html.r34-account-profile #content table td:has(span.thumb) a {
            text-decoration:none !important;
        }

        /* PROFILE — GLOW FOR MODERATION-STATUS POSTS */
        html.r34-account-profile #content span.thumb img.preview[style*="border"] {
            border-radius:10px !important;
            box-shadow:
            0 0 7px rgba(251,146,60,.55),
                0 0 16px rgba(251,146,60,.30),
                0 0 26px rgba(251,146,60,.14) !important;
        }

        /* My Profile — vertical separators */
        html.r34-account-profile #content table th,
        html.r34-account-profile #content table td {
            border-right:1px solid #245a34 !important;
        }

        html.r34-account-profile #content table th:last-child,
        html.r34-account-profile #content table td:last-child {
            border-right:none !important;
        }

        /*=====================================================
         ICAME PAGE
         ===================================================== */

        html.r34-icame table.highlightable {
            width:100% !important;
            box-sizing:border-box !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-icame table.highlightable th {
            padding:13px 15px !important;
            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-icame table.highlightable td {
            padding:11px 15px !important;
            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            vertical-align:middle !important;

            transition:background .15s ease !important;
        }

        html.r34-icame table.highlightable tr:last-child td {
            border-bottom:none !important;
        }

        html.r34-icame table.highlightable tbody tr:hover td {
            background:#151b17 !important;
        }

        /* Place */
        html.r34-icame table.highlightable th:first-child,
        html.r34-icame table.highlightable td:first-child {
            width:80px !important;
            text-align:center !important;
            color:#8f979f !important;
            font-weight:600 !important;
        }

        /* Character name */
        html.r34-icame table.highlightable th:nth-child(2),
                html.r34-icame table.highlightable td:nth-child(2) {
                    text-align:left !important;
                }

                /* iCame count */
                html.r34-icame table.highlightable th:nth-child(3),
                html.r34-icame table.highlightable td:nth-child(3) {
                    width:180px !important;
                    text-align:right !important;
                    font-variant-numeric:tabular-nums !important;
                }

                /* Character links */
                html.r34-icame table.highlightable td a {
                    color:#aeb4bd !important;
                    text-decoration:none !important;
                    font-weight:500 !important;
                }

                html.r34-icame table.highlightable td a:hover {
                    color:#86efac !important;
                    text-shadow:0 0 10px rgba(34,197,94,.20) !important;
                }

        html.r34-icame table.highlightable {
            width:50% !important;
            margin:0 !important;
        }

        html.r34-icame table.highlightable th,
        html.r34-icame table.highlightable td {
            border-right:1px solid #245a34 !important;
        }

        html.r34-icame table.highlightable th:last-child,
        html.r34-icame table.highlightable td:last-child {
            border-right:none !important;
        }

        /*=====================================================
         POOLS LIST                                            *
         ===================================================== */

        html.r34-pool-list #content table {
            width:100% !important;
            box-sizing:border-box !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-pool-list #content table th {
            padding:13px 15px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-right:1px solid #245a34 !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-pool-list #content table th:last-child {
            border-right:none !important;
        }

        html.r34-pool-list #content table td {
            padding:11px 15px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-right:1px solid #245a34 !important;
            border-bottom:1px solid #245a34 !important;

            font-size:14px !important;
            vertical-align:middle !important;

            transition:background .15s ease !important;
        }

        html.r34-pool-list #content table td:last-child {
            border-right:none !important;
        }

        html.r34-pool-list #content table tr:last-child td {
            border-bottom:none !important;
        }

        html.r34-pool-list #content table tbody tr:hover td {
            background:#151b17 !important;
        }

        /* Pool name */
        html.r34-pool-list #content table td a {
            color:#aeb4bd !important;
            text-decoration:none !important;
            font-weight:500 !important;

            transition:
            color .15s ease,
            text-shadow .15s ease !important;
        }

        html.r34-pool-list #content table td a:hover {
            color:#86efac !important;
            text-shadow:0 0 10px rgba(34,197,94,.20) !important;
        }

        /* Posts */
        html.r34-pool-list #content table th:nth-child(3),
                html.r34-pool-list #content table td:nth-child(3) {
                    width:100px !important;
                    text-align:right !important;
                    font-variant-numeric:tabular-nums !important;
                }

                /* Public */
                html.r34-pool-list #content table th:nth-child(4),
                html.r34-pool-list #content table td:nth-child(4) {
                    width:100px !important;
                    text-align:center !important;
                }

        /* POOL PAGINATOR */
        html.r34-pool-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:0 0 16px rgba(34,197,94,.12) !important;
            color:#9da5af !important;
        }

        /* PAGE LINKS */
        html.r34-pool-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-pool-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        /* CURRENT PAGE */
        html.r34-pool-list #paginator b,
        html.r34-pool-list #paginator strong,
        html.r34-pool-list #paginator span.current,
        html.r34-pool-list #paginator span.active,
        html.r34-pool-list #paginator span.selected,
        html.r34-pool-list #paginator .current,
        html.r34-pool-list #paginator .active,
        html.r34-pool-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /*=====================================================
         POOLS SHOW                                            *
         ===================================================== */

        /* POOL SHOW — THUMBNAILS */
        html.r34-pool-show span.thumb {
            border-radius:10px !important;
            overflow:visible !important;
        }

        html.r34-pool-show span.thumb img.preview {
            border-radius:10px !important;
        }

        /* POOL SHOW — DELETE MODE */
        html.r34-pool-show input[type="checkbox"] {
            appearance:none !important;
            -webkit-appearance:none !important;

            width:18px !important;
            height:18px !important;
            margin:0 7px 0 0 !important;

            box-sizing:border-box !important;

            background:#111419 !important;
            border:1px solid #3a414a !important;
            border-radius:5px !important;

            vertical-align:middle !important;
            cursor:pointer !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-pool-show input[type="checkbox"]:hover {
            border-color:#357546 !important;
            box-shadow:0 0 8px rgba(34,197,94,.14) !important;
        }

        html.r34-pool-show input[type="checkbox"]:checked {
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            border-color:#22c55e !important;

            box-shadow:
            0 0 8px rgba(34,197,94,.24),
                0 0 16px rgba(34,197,94,.10) !important;
        }

        html.r34-pool-show input[type="checkbox"]:checked::after {
            content:"✓" !important;

            display:block !important;

            color:#fff !important;
            font-size:13px !important;
            font-weight:800 !important;
            line-height:16px !important;
            text-align:center !important;
        }

        /*=====================================================
         POOLS ADD                                             *
         ===================================================== */

        html.r34-pool-add #content > h3 {
            margin:0 0 18px 0 !important;

            color:#e3e8ed !important;
            font-size:22px !important;
            font-weight:700 !important;
        }

        html.r34-pool-add #content form {
            width:100% !important;
        }

        html.r34-pool-add #content table.form {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* LEFT LABEL COLUMN */
        html.r34-pool-add #content table.form th {
            width:20% !important;
            box-sizing:border-box !important;

            padding:16px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-right:1px solid #245a34 !important;
            border-bottom:1px solid #245a34 !important;

            text-align:left !important;
            vertical-align:top !important;

            font-size:14px !important;
            font-weight:700 !important;
        }

        /* RIGHT INPUT COLUMN */
        html.r34-pool-add #content table.form td {
            box-sizing:border-box !important;

            padding:16px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            vertical-align:top !important;
        }

        /* Remove last row borders */
        html.r34-pool-add #content table.form tr:last-child th,
        html.r34-pool-add #content table.form tr:last-child td {
            border-bottom:none !important;
        }

        /* Description text under labels */
        html.r34-pool-add #content table.form th p {
            margin:8px 0 0 0 !important;

            color:#8f979f !important;
            font-size:12px !important;
            font-weight:400 !important;
            line-height:1.5 !important;
        }

        /* Inputs */
        html.r34-pool-add #content input[type="text"],
        html.r34-pool-add #content textarea,
        html.r34-pool-add #content select {
            box-sizing:border-box !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;

            transition:
            border-color .15s ease,
            box-shadow .15s ease,
            background .15s ease !important;
        }

        /* Name */
        html.r34-pool-add #pool_name {
            width:100% !important;
            max-width:500px !important;

            height:40px !important;
            padding:0 12px !important;
        }

        /* Description */
        html.r34-pool-add #pool_description {
            width:100% !important;
            max-width:700px !important;

            min-height:190px !important;
            padding:11px 12px !important;

            resize:vertical !important;
        }

        /* Select */
        html.r34-pool-add #pool_type {
            min-width:180px !important;
            height:40px !important;
            padding:0 10px !important;

            cursor:pointer !important;
        }

        html.r34-pool-add #content input[type="text"]:focus,
        html.r34-pool-add #content textarea:focus,
        html.r34-pool-add #content select:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* Pool type descriptions */
        html.r34-pool-add #content table.form th span {
            color:#aeb4bd !important;
            font-weight:600 !important;
        }

        html.r34-pool-add #content table.form th span:hover {
            color:#86efac !important;
        }

        /* ? links */
        html.r34-pool-add #content table.form th a {
            color:#6fba80 !important;
            text-decoration:none !important;
        }

        html.r34-pool-add #content table.form th a:hover {
            color:#86efac !important;
            text-shadow:0 0 8px rgba(34,197,94,.20) !important;
        }

        /* CAPTCHA — leave the widget itself untouched */
        html.r34-pool-add #content .h-captcha {
            margin:0 !important;
        }

        /* Buttons */
        html.r34-pool-add #content input[type="submit"],
        html.r34-pool-add #content input[type="button"] {
            box-sizing:border-box !important;

            min-width:90px !important;
            height:38px !important;
            padding:0 15px !important;
            margin:0 6px 0 0 !important;

            border-radius:9px !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:700 !important;

            cursor:pointer !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease,
            transform .15s ease !important;
        }

        /* Save */
        html.r34-pool-add #content input[type="submit"] {
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;

            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
        }

        html.r34-pool-add #content input[type="submit"]:hover {
            transform:translateY(-1px) !important;

            box-shadow:
            0 0 13px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        /* Cancel */
        html.r34-pool-add #content input[type="button"] {
            background:#181c22 !important;
            color:#aeb4bd !important;

            border:1px solid #303740 !important;
        }

        html.r34-pool-add #content input[type="button"]:hover {
            background:#1b2026 !important;
            color:#e3e8ed !important;
            border-color:#3a414a !important;
        }

        /*=====================================================
         TAGS LIST                                             *
         ===================================================== */

        /* TAGS TABLE */
        html.r34-tags-list #content table {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* HEADER */
        html.r34-tags-list #content table th {
            padding:12px 14px !important;

            background:#15181d !important;
            color:#e3e8ed !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-tags-list #content table th:last-child {
            border-right:none !important;
        }

        /* CELLS */
        html.r34-tags-list #content table td {
            padding:11px 14px !important;

            background:#111419 !important;
            color:#b9c0c8 !important;

            border:none !important;
            border-bottom:1px solid #1d4328 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            vertical-align:middle !important;
        }

        html.r34-tags-list #content table td:last-child {
            border-right:none !important;
        }

        html.r34-tags-list #content table tr:last-child td {
            border-bottom:none !important;
        }

        /* HOVER */
        html.r34-tags-list #content table tbody tr:hover td {
            background:#151d18 !important;
        }

        /* TAG LINKS */
        html.r34-tags-list #content table td a {
            color:#86efac !important;
            text-decoration:none !important;
            font-weight:600 !important;
        }

        html.r34-tags-list #content table td a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 8px rgba(34,197,94,.20) !important;
        }

        /* EDIT LINKS */
        html.r34-tags-list #content table td a[href*="tags&s=edit"] {
            color:#9da5af !important;
            font-weight:500 !important;
        }

        html.r34-tags-list #content table td a[href*="tags&s=edit"]:hover {
            color:#e3e8ed !important;
        }

        /* FILTER FORM */
        html.r34-tags-list #content input[type="text"],
        html.r34-tags-list #content select {
            box-sizing:border-box !important;

            height:38px !important;
            padding:0 10px !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;
        }

        html.r34-tags-list #content input[type="text"]:focus,
        html.r34-tags-list #content select:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* FORM BUTTONS */
        html.r34-tags-list #content input[type="submit"],
        html.r34-tags-list #content input[type="button"] {
            min-width:80px !important;
            height:38px !important;
            padding:0 14px !important;

            background:#181c22 !important;
            color:#c9cdd3 !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;
            font-weight:600 !important;

            cursor:pointer !important;
        }

        html.r34-tags-list #content input[type="submit"]:hover,
        html.r34-tags-list #content input[type="button"]:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
        }

        /* PAGINATOR */
        html.r34-tags-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:transparent !important;
            border:none !important;
            border-radius:12px !important;

            box-shadow:none !important;
            color:#9da5af !important;
        }
        /* FIX BORDER */
        html.r34-page-list #paginator {
            border:none !important;

            box-shadow:none !important;

            background:transparent !important;

            padding:6px !important;
        }

        /* PAGE LINKS */
        html.r34-tags-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-tags-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        /* CURRENT PAGE */
        html.r34-tags-list #paginator b,
        html.r34-tags-list #paginator strong,
        html.r34-tags-list #paginator span.current,
        html.r34-tags-list #paginator span.active,
        html.r34-tags-list #paginator span.selected,
        html.r34-tags-list #paginator .current,
        html.r34-tags-list #paginator .active,
        html.r34-tags-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /*=====================================================
         ARTIST LIST                                           *
         ===================================================== */

        /* =========================
         *  ARTIST LIST
         *  ========================= */

        html.r34-artist-list #content table {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* HEADER */

        html.r34-artist-list #content table th {
            padding:12px 14px !important;

            background:#15181d !important;
            color:#e3e8ed !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-artist-list #content table th:last-child {
            border-right:none !important;
        }

        /* CELLS */

        html.r34-artist-list #content table td {
            padding:11px 14px !important;

            background:#111419 !important;
            color:#b9c0c8 !important;

            border:none !important;
            border-bottom:1px solid #1d4328 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            vertical-align:middle !important;
        }

        html.r34-artist-list #content table td:last-child {
            border-right:none !important;
        }

        html.r34-artist-list #content table tr:last-child td {
            border-bottom:none !important;
        }

        /* ROW HOVER */

        html.r34-artist-list #content table tbody tr:hover td {
            background:#151d18 !important;
        }

        /* ARTIST NAME */

        html.r34-artist-list #content table td a {
            color:#86efac !important;
            text-decoration:none !important;
            font-weight:600 !important;
        }

        html.r34-artist-list #content table td a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 8px rgba(34,197,94,.20) !important;
        }

        /* UPDATED BY */

        html.r34-artist-list #content table td:last-child {
            color:#9da5af !important;
        }

        html.r34-artist-list #content table td:last-child a {
            color:#aeb4bd !important;
            font-weight:500 !important;
        }

        html.r34-artist-list #content table td:last-child a:hover {
            color:#e3e8ed !important;
        }

        /* P / E / D — одинаковый шаг */

        html.r34-artist-list #content table td:first-child {
            white-space:pre !important;

            color:#666d75 !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:12px !important;
            font-weight:600 !important;
            line-height:18px !important;
        }

        /* Active E / D */
        html.r34-artist-list #content table td:first-child a {
            display:inline !important;

            margin:0 !important;
            padding:0 !important;

            background:none !important;
            border:none !important;
            box-shadow:none !important;

            color:#86efac !important;

            font:inherit !important;
            line-height:inherit !important;

            text-decoration:none !important;
        }

        html.r34-artist-list #content table td:first-child a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* PAGINATOR */

        html.r34-artist-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:12px !important;

            box-shadow:0 0 16px rgba(34,197,94,.12) !important;
            color:#9da5af !important;
        }

        /* PAGE LINKS */

        html.r34-artist-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-artist-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        /* CURRENT PAGE */

        html.r34-artist-list #paginator b,
        html.r34-artist-list #paginator strong,
        html.r34-artist-list #paginator span.current,
        html.r34-artist-list #paginator span.active,
        html.r34-artist-list #paginator span.selected,
        html.r34-artist-list #paginator .current,
        html.r34-artist-list #paginator .active,
        html.r34-artist-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /* =========================
         *  ARTIST SEARCH
         *  ========================= */

        html.r34-artist-list #content input[type="text"] {
            box-sizing:border-box !important;

            width:300px !important;
            max-width:100% !important;
            height:40px !important;

            padding:0 12px !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-artist-list #content input[type="text"]::placeholder {
            color:#6f7781 !important;
        }

        html.r34-artist-list #content input[type="text"]:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* SEARCH BUTTON */

        html.r34-artist-list #content input[type="submit"] {
            height:40px !important;
            padding:0 20px !important;
            margin-left:6px !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;
            border-radius:999px !important;

            font-size:14px !important;
            font-weight:700 !important;

            cursor:pointer !important;

            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
        }

        html.r34-artist-list #content input[type="submit"]:hover {
            transform:translateY(-1px) !important;

            box-shadow:
            0 0 13px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        /* =========================
         *  PAGINATOR — NO OUTER BORDER
         *  ========================= */

        html.r34-artist-list #paginator {
            border:none !important;

            box-shadow:none !important;

            background:transparent !important;

            padding:6px !important;
        }

        /* =========================
         *  ARTIST CREATE
         *  ========================= */

        html.r34-artist-create #content > h3,
        html.r34-artist-update #content > h3 {
            margin:0 0 18px 0 !important;

            color:#e3e8ed !important;
            font-size:22px !important;
            font-weight:700 !important;
        }

        html.r34-artist-create #content form,
        html.r34-artist-update #content form {
            width:100% !important;
        }

        html.r34-artist-create #content table.form,
        html.r34-artist-update #content table.form {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* LABEL COLUMN */

        html.r34-artist-create #content table.form th,
        html.r34-artist-update #content table.form th {
            width:20% !important;
            box-sizing:border-box !important;

            padding:16px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-right:1px solid #245a34 !important;
            border-bottom:1px solid #245a34 !important;

            text-align:left !important;
            vertical-align:top !important;

            font-size:14px !important;
            font-weight:700 !important;
        }

        /* INPUT COLUMN */

        html.r34-artist-create #content table.form td,
        html.r34-artist-update #content table.form td {
            box-sizing:border-box !important;

            padding:16px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            vertical-align:top !important;
        }

        html.r34-artist-create #content table.form tr:last-child th,
        html.r34-artist-update #content table.form tr:last-child th,
        html.r34-artist-create #content table.form tr:last-child td,
        html.r34-artist-update #content table.form tr:last-child td {
            border-bottom:none !important;
        }

        /* INPUTS */

        html.r34-artist-create #content input[type="text"],
        html.r34-artist-update #content input[type="text"],
        html.r34-artist-create #content textarea,
        html.r34-artist-update #content textarea {
            display:block !important;

            box-sizing:border-box !important;

            width:100% !important;
            max-width:none !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        /* SINGLE-LINE FIELDS */

        html.r34-artist-create #artist_name,
        html.r34-artist-update #artist_name,
        html.r34-artist-create #artist_alias_names,
        html.r34-artist-update #artist_alias_names,
        html.r34-artist-create #artist_member_names,
        html.r34-artist-update #artist_member_names {
            height:40px !important;
            padding:0 12px !important;
        }

        /* URLS / NOTES */

        html.r34-artist-create #artist_urls,
        html.r34-artist-update #artist_urls,
        html.r34-artist-create #artist_notes,
        html.r34-artist-update #artist_notes {
            min-height:150px !important;
            padding:10px 12px !important;

            resize:vertical !important;
        }

        /* FOCUS */

        html.r34-artist-create #content input[type="text"]:focus,
        html.r34-artist-update #content input[type="text"]:focus,
        html.r34-artist-create #content textarea:focus,
        html.r34-artist-update #content textarea:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* BUTTON ROW */

        html.r34-artist-create #content table.form tr:last-child td,
        html.r34-artist-update #content table.form tr:last-child td {
            padding:16px !important;

            background:#111419 !important;
        }

        /* BUTTONS */

        html.r34-artist-create #content input[type="submit"],
        html.r34-artist-update #content input[type="submit"],
        html.r34-artist-create #content input[type="button"],
        html.r34-artist-update #content input[type="button"] {
            box-sizing:border-box !important;

            height:38px !important;
            padding:0 18px !important;
            margin:0 6px 0 0 !important;

            border-radius:999px !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:700 !important;

            cursor:pointer !important;

            transition:
            transform .15s ease,
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        /* SAVE */

        html.r34-artist-create #content input[type="submit"],
        html.r34-artist-update #content input[type="submit"] {
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;

            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
        }

        html.r34-artist-create #content input[type="submit"]:hover,
        html.r34-artist-update #content input[type="submit"]:hover {
            transform:translateY(-1px) !important;

            box-shadow:
            0 0 13px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        /* CANCEL */

        html.r34-artist-create #content input[type="button"],
        html.r34-artist-update #content input[type="button"] {
            background:#181c22 !important;
            color:#aeb4bd !important;

            border:1px solid #303740 !important;
        }

        html.r34-artist-create #content input[type="button"]:hover,
        html.r34-artist-update #content input[type="button"]:hover {
            background:#1b2026 !important;
            color:#e3e8ed !important;
            border-color:#3a414a !important;
        }

        /* =========================
         *  ALIAS LIST
         *  ========================= */

        html.r34-alias-list #content table {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-alias-list #content table th {
            padding:12px 14px !important;

            background:#15181d !important;
            color:#e3e8ed !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            font-weight:700 !important;
            text-align:left !important;
        }

        html.r34-alias-list #content table th:last-child {
            border-right:none !important;
        }

        html.r34-alias-list #content table td {
            padding:11px 14px !important;

            background:#111419 !important;
            color:#aeb4bd !important;

            border:none !important;
            border-bottom:1px solid #1d4328 !important;
            border-right:1px solid #245a34 !important;

            font-size:13px !important;
            vertical-align:middle !important;
        }

        html.r34-alias-list #content table td:last-child {
            border-right:none !important;
        }

        html.r34-alias-list #content table tr:last-child td {
            border-bottom:none !important;
        }

        html.r34-alias-list #content table tbody tr:hover td {
            background:#151d18 !important;
        }

        /* ALIAS / TARGET LINKS */

        html.r34-alias-list #content table td a {
            color:#86efac !important;
            text-decoration:none !important;
            font-weight:600 !important;
        }

        html.r34-alias-list #content table td a:hover {
            color:#bbf7d0 !important;

            text-shadow:
            0 0 8px rgba(34,197,94,.20) !important;
        }

        /* POST COUNTS */

        html.r34-alias-list #content table td a {
            white-space:nowrap !important;
        }

        /* ALIAS FILTER / FORM INPUTS */

        html.r34-alias-list #content input[type="text"],
        html.r34-alias-list #content textarea,
        html.r34-alias-list #content select {
            box-sizing:border-box !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-alias-list #content input[type="text"] {
            height:38px !important;
            padding:0 11px !important;
        }

        html.r34-alias-list #content textarea {
            padding:10px 11px !important;
        }

        html.r34-alias-list #content input[type="text"]:focus,
        html.r34-alias-list #content textarea:focus,
        html.r34-alias-list #content select:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* ALIAS FORM BUTTONS */

        html.r34-alias-list #content input[type="submit"],
        html.r34-alias-list #content input[type="button"] {
            box-sizing:border-box !important;

            height:38px !important;
            padding:0 16px !important;
            margin-right:5px !important;

            border-radius:999px !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;
            font-weight:700 !important;

            cursor:pointer !important;

            transition:
            transform .15s ease,
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-alias-list #content input[type="submit"] {
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;

            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
        }

        html.r34-alias-list #content input[type="submit"]:hover {
            transform:translateY(-1px) !important;

            box-shadow:
            0 0 13px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        html.r34-alias-list #content input[type="button"] {
            background:#181c22 !important;
            color:#aeb4bd !important;

            border:1px solid #303740 !important;
        }

        html.r34-alias-list #content input[type="button"]:hover {
            background:#1b2026 !important;
            color:#e3e8ed !important;
            border-color:#3a414a !important;
        }

        /* ALIAS PAGINATOR */

        html.r34-alias-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;
            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:transparent !important;
            border:none !important;
            border-radius:12px !important;

            box-shadow:none !important;
            color:#9da5af !important;
        }

        html.r34-alias-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;
            text-decoration:none !important;
        }

        html.r34-alias-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;
            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;
            transform:translateY(-1px) !important;
        }

        /* CURRENT PAGE */

        html.r34-alias-list #paginator b,
        html.r34-alias-list #paginator strong,
        html.r34-alias-list #paginator span.current,
        html.r34-alias-list #paginator span.active,
        html.r34-alias-list #paginator span.selected,
        html.r34-alias-list #paginator .current,
        html.r34-alias-list #paginator .active,
        html.r34-alias-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;
            min-width:38px !important;
            height:38px !important;
            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /* =========================
         *  ALIAS ADD
         *  ========================= */

        html.r34-alias-add #content > h3 {
            margin:0 0 18px 0 !important;

            color:#e3e8ed !important;
            font-size:22px !important;
            font-weight:700 !important;
        }

        html.r34-alias-add #content form {
            width:100% !important;
        }

        html.r34-alias-add #content table.form {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;
            overflow:hidden !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* LABEL COLUMN */

        html.r34-alias-add #content table.form th {
            width:20% !important;
            box-sizing:border-box !important;

            padding:16px !important;

            background:#15181d !important;
            color:#e0e4e9 !important;

            border:none !important;
            border-right:1px solid #245a34 !important;
            border-bottom:1px solid #245a34 !important;

            text-align:left !important;
            vertical-align:top !important;

            font-size:14px !important;
            font-weight:700 !important;
        }

        /* INPUT COLUMN */

        html.r34-alias-add #content table.form td {
            box-sizing:border-box !important;

            padding:16px !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            vertical-align:top !important;
        }

        html.r34-alias-add #content table.form tr:last-child th,
        html.r34-alias-add #content table.form tr:last-child td {
            border-bottom:none !important;
        }

        /* DESCRIPTION TEXT */

        html.r34-alias-add #content table.form th p {
            margin:8px 0 0 0 !important;

            color:#8f979f !important;
            font-size:12px !important;
            font-weight:400 !important;
            line-height:1.5 !important;
        }

        /* INPUTS */

        html.r34-alias-add #content input[type="text"],
        html.r34-alias-add #content textarea,
        html.r34-alias-add #content select {
            box-sizing:border-box !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;

            transition:
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-alias-add #content input[type="text"] {
            width:100% !important;
            max-width:500px !important;

            height:40px !important;
            padding:0 12px !important;
        }

        html.r34-alias-add #content textarea {
            width:100% !important;
            max-width:700px !important;

            min-height:150px !important;
            padding:10px 12px !important;

            resize:vertical !important;
        }

        html.r34-alias-add #content input[type="text"]:focus,
        html.r34-alias-add #content textarea:focus,
        html.r34-alias-add #content select:focus {
            background:#1b2026 !important;
            border-color:#357546 !important;

            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* LINKS / HELP TEXT */

        html.r34-alias-add #content table.form a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html.r34-alias-add #content table.form a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 8px rgba(34,197,94,.20) !important;
        }

        /* BUTTONS */

        html.r34-alias-add #content input[type="submit"],
        html.r34-alias-add #content input[type="button"] {
            box-sizing:border-box !important;

            height:38px !important;
            padding:0 18px !important;
            margin:0 6px 0 0 !important;

            border-radius:999px !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:700 !important;

            cursor:pointer !important;

            transition:
            transform .15s ease,
            background .15s ease,
            border-color .15s ease,
            box-shadow .15s ease !important;
        }

        /* SAVE */

        html.r34-alias-add #content input[type="submit"] {
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;

            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
        }

        html.r34-alias-add #content input[type="submit"]:hover {
            transform:translateY(-1px) !important;

            box-shadow:
            0 0 13px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        /* CANCEL */

        html.r34-alias-add #content input[type="button"] {
            background:#181c22 !important;
            color:#aeb4bd !important;

            border:1px solid #303740 !important;
        }

        html.r34-alias-add #content input[type="button"]:hover {
            background:#1b2026 !important;
            color:#e3e8ed !important;
            border-color:#3a414a !important;
        }

        /* =========================
         *  COMMENT LIST / COMMENT USER
         *  ========================= */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list {
            width:100% !important;
        }

        /* POST CARD */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] {
            box-sizing:border-box !important;
            width:100% !important;
            margin:0 0 22px 0 !important;
            padding:14px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
            overflow:hidden !important;
        }

        /* POST LAYOUT */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] > .col1 {
            margin-right:14px !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] > .col1 img.preview {
            display:block !important;
            border-radius:10px !important;
        }

        /* POST HEADER */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .header {
            color:#c9cdd3 !important;
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:13px !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .info {
            margin-right:12px !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .info strong {
            color:#e3e8ed !important;
            font-weight:700 !important;
        }

        /* LINKS */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* TAGS */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .tags {
            box-sizing:border-box !important;
            width:100% !important;
            max-width:none !important;
            margin-top:10px !important;
            padding:10px 12px !important;
            background:#0d1110 !important;
            border:1px solid #1e482b !important;
            border-radius:9px !important;
            color:#9da5af !important;
            line-height:1.7 !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .tags strong {
            color:#c9cdd3 !important;
        }

        /* COMMENT SECTION */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] > .response-list {
            clear:both !important;
            margin-top:14px !important;
            padding-top:12px !important;
            border-top:1px solid #245a34 !important;
        }

        /* INDIVIDUAL COMMENT */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .post[id^="p"] .response-list > .post[id^="c"] {
            box-sizing:border-box !important;
            display:flex !important;
            gap:14px !important;
            width:100% !important;
            margin:0 0 8px 0 !important;
            padding:11px 12px !important;
            background:#181c22 !important;
            border:1px solid #292f37 !important;
            border-radius:9px !important;
            color:#c9cdd3 !important;
        }

        /* COMMENT AUTHOR */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .author {
            flex:0 0 150px !important;
            box-sizing:border-box !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .author h6 {
            margin:0 0 3px 0 !important;
            color:#e3e8ed !important;
            font-size:13px !important;
            font-weight:700 !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .date {
            color:#6f7781 !important;
            font-size:11px !important;
            line-height:1.4 !important;
        }

        /* COMMENT CONTENT */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .content {
            flex:1 1 auto !important;
            min-width:0 !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .body {
            color:#c9cdd3 !important;
            font-size:14px !important;
            line-height:1.55 !important;
            overflow-wrap:anywhere !important;
        }

        /* COMMENT FOOTER */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .footer {
            margin-top:7px !important;
            color:#6f7781 !important;
            font-size:11px !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .footer a {
            color:#6f7781 !important;
            text-shadow:none !important;
        }

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .footer a:hover {
            color:#86efac !important;
        }

        /* ALREADY REPORTED */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list .post[id^="c"] .footer b {
            color:#666d75 !important;
            font-weight:600 !important;
        }

        /* HIDDEN COMMENTS */

        html:is(.r34-comment-list, .r34-comment-user) #comment-list > .content {
            margin:10px 0 !important;
            color:#6f7781 !important;
            font-size:12px !important;
        }

        /* PAGINATOR */

        html.r34-comment-list #paginator {
            display:flex !important;

            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;

            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;

            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:6px !important;

            background:transparent !important;

            border:none !important;
            border-radius:12px !important;

            box-shadow:none !important;

            color:#9da5af !important;
        }

        html.r34-comment-list #paginator a {
            display:inline-flex !important;

            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:38px !important;
            height:38px !important;

            padding:0 13px !important;
            margin:0 !important;

            background:#181c22 !important;

            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;

            line-height:1 !important;

            text-decoration:none !important;
        }

        html.r34-comment-list #paginator a:hover {
            background:#1b2820 !important;

            color:#e3e8ed !important;

            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;

            transform:translateY(-1px) !important;
        }

        /* =========================
         *  WIKI LIST
         *  ========================= */

        html.r34-wiki-list #content {
            color:#c9cdd3 !important;
        }

        /* RECENT CHANGES */

        html.r34-wiki-list #content > div:first-child {
            color:#c9cdd3 !important;
        }

        html.r34-wiki-list #content a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html.r34-wiki-list #content a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* WIKI SEARCH */

        html.r34-wiki-list #content input[type="text"],
        html.r34-wiki-list #content input[type="search"] {
            box-sizing:border-box !important;

            min-height:38px !important;
            padding:8px 12px !important;

            background:#181c22 !important;
            color:#e3e8ed !important;

            border:1px solid #303740 !important;
            border-radius:9px !important;

            outline:none !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
        }

        html.r34-wiki-list #content input[type="text"]:focus,
        html.r34-wiki-list #content input[type="search"]:focus {
            border-color:#357546 !important;
            box-shadow:0 0 10px rgba(34,197,94,.12) !important;
        }

        html.r34-wiki-list #content input[type="submit"],
        html.r34-wiki-list #content input[type="button"] {
            min-height:38px !important;
            padding:0 16px !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;

            border:1px solid #22c55e !important;
            border-radius:999px !important;

            font-weight:700 !important;

            cursor:pointer !important;

            box-shadow:0 0 10px rgba(34,197,94,.16) !important;
        }

        html.r34-wiki-list #content input[type="submit"]:hover,
        html.r34-wiki-list #content input[type="button"]:hover {
            box-shadow:
            0 0 12px rgba(34,197,94,.24),
                0 0 22px rgba(34,197,94,.10) !important;

                transform:translateY(-1px) !important;
        }

        /* WIKI LIST */

        html.r34-wiki-list #content h3 {
            margin:20px 0 12px 0 !important;

            color:#e3e8ed !important;

            font-size:18px !important;
            font-weight:700 !important;
        }

        /* WIKI ENTRY */

        html.r34-wiki-list #content > div {
            box-sizing:border-box !important;
        }

        html.r34-wiki-list #content > div a {
            color:#86efac !important;
        }

        html.r34-wiki-list #content > div a:hover {
            color:#bbf7d0 !important;
        }

        /* VERSION / META TEXT */

        html.r34-wiki-list #content {
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
        }

        html.r34-wiki-list #content small {
            color:#6f7781 !important;
        }

        /* PAGINATOR */

        html.r34-wiki-list #paginator {
            display:flex !important;
            align-items:center !important;
            justify-content:center !important;
            flex-wrap:wrap !important;
            gap:6px !important;

            width:fit-content !important;
            max-width:96% !important;

            box-sizing:border-box !important;

            margin:28px auto !important;
            padding:0 !important;

            background:transparent !important;
            border:none !important;
            box-shadow:none !important;
        }

        html.r34-wiki-list #paginator a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:38px !important;
            height:38px !important;

            padding:0 11px !important;
            margin:0 !important;

            background:#181c22 !important;
            color:#9da5af !important;

            border:1px solid #292f37 !important;
            border-radius:9px !important;

            font-size:14px !important;
            font-weight:600 !important;
            line-height:1 !important;

            text-decoration:none !important;
        }

        html.r34-wiki-list #paginator a:hover {
            background:#1b2820 !important;
            color:#e3e8ed !important;

            border-color:#357546 !important;

            box-shadow:0 0 10px rgba(34,197,94,.14) !important;

            transform:translateY(-1px) !important;
        }

        html.r34-wiki-list #paginator b,
        html.r34-wiki-list #paginator strong,
        html.r34-wiki-list #paginator span.current,
        html.r34-wiki-list #paginator span.active,
        html.r34-wiki-list #paginator span.selected,
        html.r34-wiki-list #paginator .current,
        html.r34-wiki-list #paginator .active,
        html.r34-wiki-list #paginator .selected {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;

            box-sizing:border-box !important;

            min-width:38px !important;
            height:38px !important;

            padding:0 11px !important;
            margin:0 !important;

            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
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

        /* =========================
         *  WIKI LIST TABLE
         *  ========================= */

        html.r34-wiki-list table.highlightable {
            width:100% !important;
            box-sizing:border-box !important;

            border-collapse:separate !important;
            border-spacing:0 !important;

            background:#111419 !important;
            color:#c9cdd3 !important;

            border:1px solid #245a34 !important;
            border-radius:14px !important;

            overflow:hidden !important;

            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* ROW */

        html.r34-wiki-list table.highlightable tr {
            background:#111419 !important;
            transition:
            background .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-wiki-list table.highlightable tr:hover {
            background:#151c18 !important;
            box-shadow:inset 0 0 18px rgba(34,197,94,.05) !important;
        }

        /* CELLS */

        html.r34-wiki-list table.highlightable td {
            box-sizing:border-box !important;

            padding:12px !important;

            background:transparent !important;
            color:#c9cdd3 !important;

            border:none !important;
            border-bottom:1px solid #245a34 !important;

            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
        }

        /* LAST ROW */

        html.r34-wiki-list table.highlightable tr:last-child td {
            border-bottom:none !important;
        }

        /* ICON */

        html.r34-wiki-list table.highlightable td:first-child {
            width:44px !important;

            padding:10px !important;

            text-align:center !important;
            vertical-align:middle !important;
        }

        html.r34-wiki-list table.highlightable td:first-child img {
            display:block !important;

            width:auto !important;
            max-width:24px !important;
            height:auto !important;

            margin:auto !important;
        }

        /* WIKI NAME */

        html.r34-wiki-list table.highlightable td:nth-child(2) {
            vertical-align:middle !important;
        }

        html.r34-wiki-list table.highlightable td:nth-child(2) > a {
            color:#86efac !important;

            font-size:14px !important;
            font-weight:700 !important;

            text-decoration:none !important;
        }

        html.r34-wiki-list table.highlightable td:nth-child(2) > a:hover {
            color:#bbf7d0 !important;

            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* LAST UPDATED */

        html.r34-wiki-list table.highlightable td:nth-child(2) span {
            color:#6f7781 !important;

            font-size:11px !important;
            line-height:1.4 !important;
        }

        html.r34-wiki-list table.highlightable td:nth-child(2) span a {
            color:#86efac !important;

            font-weight:600 !important;
        }

        html.r34-wiki-list table.highlightable td:nth-child(2) span a:hover {
            color:#bbf7d0 !important;
        }

        /* VERSION */

        html.r34-wiki-list table.highlightable td:last-child {
            width:130px !important;

            text-align:center !important;
            vertical-align:middle !important;

            border-left:1px solid #245a34 !important;
        }

        html.r34-wiki-list table.highlightable td:last-child h3 {
            margin:0 !important;

            color:#c9cdd3 !important;

            font-size:13px !important;
            font-weight:700 !important;
        }

        /* WIKI CREATE */

        html.r34-wiki-create .content > div {
            color:#9da5af !important;
        }

        html.r34-wiki-create .content > div > div {
            color:#9da5af !important;
        }

        html.r34-wiki-create .content h3 {
            margin:0 0 12px 0 !important;
            padding:0 !important;
            color:#e3e8ed !important;
            font-size:18px !important;
            font-weight:700 !important;
        }

        html.r34-wiki-create .content form {
            box-sizing:border-box !important;
            width:100% !important;
            margin:20px 0 0 0 !important;
            padding:18px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
            color:#9da5af !important;
        }

        html.r34-wiki-create .content form > br {
            display:block !important;
            content:"" !important;
            height:10px !important;
        }

        html.r34-wiki-create .content input[type="text"],
        html.r34-wiki-create .content textarea {
            box-sizing:border-box !important;
            width:100% !important;
            margin-top:6px !important;
            padding:10px 12px !important;
            background:#181c22 !important;
            color:#e3e8ed !important;
            border:1px solid #303740 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            transition:
            border-color .15s ease,
            box-shadow .15s ease,
            background .15s ease !important;
        }

        html.r34-wiki-create .content input[type="text"] {
            height:42px !important;
        }

        html.r34-wiki-create .content textarea {
            min-height:220px !important;
            resize:vertical !important;
            line-height:1.55 !important;
        }

        html.r34-wiki-create .content input[type="text"]:focus,
        html.r34-wiki-create .content textarea:focus {
            background:#1b2027 !important;
            border-color:#357546 !important;
            box-shadow:0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        html.r34-wiki-create .content input[type="text"]::placeholder,
        html.r34-wiki-create .content textarea::placeholder {
            color:#666d75 !important;
        }

        html.r34-wiki-create .content form > .cf-turnstile {
            margin:14px 0 !important;
        }

        html.r34-wiki-create .content input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            min-width:130px !important;
            height:40px !important;
            margin-top:8px !important;
            padding:0 18px !important;
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;
            border:1px solid #22c55e !important;
            border-radius:999px !important;
            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
                font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                font-size:14px !important;
                font-weight:700 !important;
                cursor:pointer !important;
                transition:
                transform .15s ease,
                box-shadow .15s ease,
                filter .15s ease !important;
        }

        html.r34-wiki-create .content input[type="submit"]:hover {
            filter:brightness(1.05) !important;
            box-shadow:
            0 0 12px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
                transform:translateY(-1px) !important;
        }

        html.r34-wiki-create .content input[type="submit"]:active {
            transform:translateY(0) !important;
        }

        /* WIKI VIEW */

        html.r34-wiki-view #content > .flexi {
            display:flex !important;
            align-items:flex-start !important;
            gap:20px !important;
            width:100% !important;
            box-sizing:border-box !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child {
            flex:1 1 50% !important;
            box-sizing:border-box !important;
            min-width:0 !important;
            padding:20px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            color:#c9cdd3 !important;
            text-align:left !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) {
            flex:1 1 50% !important;
            box-sizing:border-box !important;
            min-width:0 !important;
            padding:16px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        /* ARTICLE TITLE */

        html.r34-wiki-view #content > .flexi > div:first-child h2 {
            display:block !important;
            margin:0 0 8px 0 !important;
            color:#e3e8ed !important;
            font-size:22px !important;
            font-weight:700 !important;
            line-height:1.3 !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child > span {
            display:inline-block !important;
            margin-bottom:14px !important;
            color:#86efac !important;
            font-size:12px !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child > span b {
            color:#86efac !important;
        }

        /* ARTICLE TEXT */

        html.r34-wiki-view #content > .flexi > div:first-child {
            font-size:14px !important;
            line-height:1.65 !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child h4 {
            margin:22px 0 8px 0 !important;
            padding-bottom:7px !important;
            color:#e3e8ed !important;
            border-bottom:1px solid #245a34 !important;
            font-size:16px !important;
            font-weight:700 !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* WIKI INFORMATION BLOCKS */

        html.r34-wiki-view #content > .flexi > div:first-child .lighter-background {
            box-sizing:border-box !important;
            width:100% !important;
            margin-top:10px !important;
            padding:11px 13px !important;
            background:#181c22 !important;
            border:1px solid #303740 !important;
            border-radius:9px !important;
            color:#9da5af !important;
            line-height:1.5 !important;
        }

        html.r34-wiki-view #content > .flexi > div:first-child .lighter-background a {
            color:#86efac !important;
            font-weight:600 !important;
        }

        /* POST PREVIEWS */

        html.r34-wiki-view #content > .flexi > div:nth-child(2) > a {
            display:inline-block !important;
            margin:4px !important;
            vertical-align:top !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) span.thumb {
            display:block !important;
            overflow:hidden !important;
            border-radius:10px !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) img.preview {
            display:block !important;
            border-radius:10px !important;
            transition:
            transform .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) > a:hover img.preview {
            transform:scale(1.03) !important;
            box-shadow:0 0 12px rgba(34,197,94,.20) !important;
        }

        /* VIEW MORE */

        html.r34-wiki-view #content > .flexi > div:nth-child(2) table {
            margin-top:14px !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) table h3 {
            margin:0 !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) table h3 a {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            min-height:38px !important;
            padding:0 18px !important;
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;
            border:1px solid #22c55e !important;
            border-radius:999px !important;
            font-size:14px !important;
            font-weight:700 !important;
            text-decoration:none !important;
            box-shadow:0 0 12px rgba(34,197,94,.18) !important;
            transition:
            transform .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-wiki-view #content > .flexi > div:nth-child(2) table h3 a:hover {
            color:#fff !important;
            transform:translateY(-1px) !important;
            box-shadow:
            0 0 14px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.10) !important;
        }

        /* WIKI EDIT */

        html.r34-wiki-edit #post-list {
            display:flex !important;
            align-items:flex-start !important;
            gap:20px !important;
            width:100% !important;
            box-sizing:border-box !important;
        }

        /* SIDEBAR */

        html.r34-wiki-edit #post-list > .sidebar {
            flex:0 0 260px !important;
            width:260px !important;
            box-sizing:border-box !important;
        }

        html.r34-wiki-edit #post-list > .sidebar > div {
            box-sizing:border-box !important;
            width:100% !important;
            padding:18px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            color:#9da5af !important;
            font-size:13px !important;
            line-height:1.55 !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-wiki-edit #post-list > .sidebar span {
            color:#e3e8ed !important;
            font-size:14px !important;
        }

        html.r34-wiki-edit #post-list > .sidebar a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html.r34-wiki-edit #post-list > .sidebar a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* EDITOR */

        html.r34-wiki-edit #post-list > .content {
            flex:1 1 auto !important;
            min-width:0 !important;
            box-sizing:border-box !important;
            padding:20px !important;
            background:#111419 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            color:#9da5af !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-wiki-edit #post-list > .content > h3 {
            display:block !important;
            margin:0 0 14px 0 !important;
            color:#e3e8ed !important;
            font-size:20px !important;
            font-weight:700 !important;
        }

        /* FORM */

        html.r34-wiki-edit #post-list > .content form {
            width:100% !important;
            box-sizing:border-box !important;
            color:#9da5af !important;
            font-size:13px !important;
            line-height:1.5 !important;
        }

        html.r34-wiki-edit #post-list > .content form > input[type="text"] {
            box-sizing:border-box !important;
            width:100% !important;
            height:42px !important;
            margin-top:6px !important;
            padding:10px 12px !important;
            background:#181c22 !important;
            color:#9da5af !important;
            border:1px solid #303740 !important;
            border-radius:9px !important;
            outline:none !important;
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            font-weight:600 !important;
            cursor:not-allowed !important;
            opacity:1 !important;
        }

        html.r34-wiki-edit #post-list > .content form > textarea {
            box-sizing:border-box !important;
            width:100% !important;
            min-height:420px !important;
            margin-top:6px !important;
            padding:12px 14px !important;
            background:#181c22 !important;
            color:#e3e8ed !important;
            border:1px solid #303740 !important;
            border-radius:9px !important;
            outline:none !important;
            resize:vertical !important;
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            line-height:1.55 !important;
            tab-size:4 !important;
            transition:
            border-color .15s ease,
            box-shadow .15s ease,
            background .15s ease !important;
        }

        html.r34-wiki-edit #post-list > .content form > textarea:focus {
            background:#1b2027 !important;
            border-color:#357546 !important;
            box-shadow:
            0 0 0 2px rgba(34,197,94,.08),
                0 0 12px rgba(34,197,94,.10) !important;
        }

        /* CAPTCHA */

        html.r34-wiki-edit #post-list > .content .cf-turnstile {
            margin:14px 0 !important;
        }

        /* SUBMIT */

        html.r34-wiki-edit #post-list > .content input[type="submit"] {
            display:inline-flex !important;
            align-items:center !important;
            justify-content:center !important;
            min-width:125px !important;
            height:40px !important;
            margin-top:4px !important;
            padding:0 18px !important;
            background:linear-gradient(135deg,#22c55e,#16a34a) !important;
            color:#fff !important;
            border:1px solid #22c55e !important;
            border-radius:999px !important;
            box-shadow:
            0 0 10px rgba(34,197,94,.20),
                0 0 20px rgba(34,197,94,.08) !important;
                font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                font-size:14px !important;
                font-weight:700 !important;
                cursor:pointer !important;
                transition:
                transform .15s ease,
                box-shadow .15s ease,
                filter .15s ease !important;
        }

        html.r34-wiki-edit #post-list > .content input[type="submit"]:hover {
            filter:brightness(1.05) !important;
            transform:translateY(-1px) !important;
            box-shadow:
            0 0 12px rgba(34,197,94,.28),
                0 0 24px rgba(34,197,94,.12) !important;
        }

        html.r34-wiki-edit #post-list > .content input[type="submit"]:active {
            transform:translateY(0) !important;
        }

        /* WARNING */

        html.r34-wiki-edit #post-list > .content > center {
            display:block !important;
            box-sizing:border-box !important;
            margin-top:16px !important;
            padding:11px 13px !important;
            background:#181c22 !important;
            border:1px solid #303740 !important;
            border-radius:9px !important;
            color:#9da5af !important;
            font-size:12px !important;
            line-height:1.5 !important;
            text-align:left !important;
        }

        /* WIKI HISTORY */

        html.r34-wiki-history #content > div {
            width:100% !important;
            box-sizing:border-box !important;
        }

        html.r34-wiki-history #content h3 {
            margin:0 0 14px 0 !important;
            padding:0 !important;
            color:#e3e8ed !important;
            font-size:20px !important;
            font-weight:700 !important;
        }

        html.r34-wiki-history #content table.highlightable {
            width:100% !important;
            box-sizing:border-box !important;
            border-collapse:separate !important;
            border-spacing:0 !important;
            background:#111419 !important;
            color:#c9cdd3 !important;
            border:1px solid #245a34 !important;
            border-radius:14px !important;
            overflow:hidden !important;
            box-shadow:0 4px 18px rgba(0,0,0,.18) !important;
        }

        html.r34-wiki-history #content table.highlightable tr {
            background:#111419 !important;
            transition:
            background .15s ease,
            box-shadow .15s ease !important;
        }

        html.r34-wiki-history #content table.highlightable tr:hover {
            background:#151c18 !important;
            box-shadow:inset 0 0 18px rgba(34,197,94,.05) !important;
        }

        html.r34-wiki-history #content table.highlightable td {
            box-sizing:border-box !important;
            padding:14px !important;
            background:transparent !important;
            color:#c9cdd3 !important;
            border:none !important;
            border-bottom:1px solid #245a34 !important;
            font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
            font-size:14px !important;
            line-height:1.6 !important;
            vertical-align:top !important;
        }

        html.r34-wiki-history #content table.highlightable tr:last-child td {
            border-bottom:none !important;
        }

        /* VERSION */

        html.r34-wiki-history #content table.highlightable td:first-child {
            width:80px !important;
            min-width:80px !important;
            padding:14px 10px !important;
            color:#86efac !important;
            font-size:15px !important;
            font-weight:800 !important;
            text-align:center !important;
            vertical-align:top !important;
            border-right:1px solid #245a34 !important;
            white-space:nowrap !important;
        }

        /* REVISION CONTENT */

        html.r34-wiki-history #content table.highlightable td:nth-child(2) {
            color:#c9cdd3 !important;
        }

        html.r34-wiki-history #content table.highlightable td:nth-child(2) br {
            line-height:1.2 !important;
        }

        /* LINKS */

        html.r34-wiki-history #content table.highlightable a {
            color:#86efac !important;
            text-decoration:none !important;
        }

        html.r34-wiki-history #content table.highlightable a:hover {
            color:#bbf7d0 !important;
            text-shadow:0 0 7px rgba(34,197,94,.20) !important;
        }

        /* UPDATED BY / DATE */

        html.r34-wiki-history #content table.highlightable td:nth-child(2) > span {
            display:block !important;
            margin-top:12px !important;
            padding-top:9px !important;
            color:#6f7781 !important;
            border-top:1px solid #303740 !important;
            font-size:11px !important;
            line-height:1.4 !important;
        }

        html.r34-wiki-history #content table.highlightable td:nth-child(2) > span a {
            color:#86efac !important;
            font-weight:600 !important;
        }

        html.r34-wiki-history #content table.highlightable td:nth-child(2) > span span {
            color:#666d75 !important;
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

        const rows = document.querySelectorAll('#tag-sidebar li[class*="tag-type-"]');

        for (const row of rows) {
            for (const element of row.querySelectorAll('[class*="count" i],small,em')) {
                const text = element.textContent.replace(/\s+/g, ' ').trim();
                if (/^\d[\d,]*$/.test(text)) {
                    element.classList.add('r34-tag-count');
                }
            }

            const walker = document.createTreeWalker(row, NodeFilter.SHOW_TEXT);

            const nodes = [];

            while (walker.nextNode()) {
                nodes.push(walker.currentNode);
            }

            for (const node of nodes) {
                if (!node.parentElement) {
                    continue;
                }

                if (node.parentElement.closest('a')) {
                    continue;
                }

                if (node.parentElement.classList.contains('r34-tag-count')) {
                    continue;
                }

                const text = node.nodeValue || '';

                if (!/^\s*[\d,]+\s*$/.test(text)) {
                    continue;
                }

                const count = document.createElement('span');

                count.className = 'r34-tag-count';

                count.textContent = text.trim();

                node.parentNode.replaceChild(count, node);
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

        for (const header of document.querySelectorAll('#tag-sidebar h6')) {
            const text = header.textContent.replace(/\s+/g, ' ').trim().toLowerCase();

            header.classList.remove(
                'r34-section-character',
                'r34-section-general',
                'r34-section-meta',
                'r34-section-copyright',
                'r34-section-artist'
            );

            if (text.includes('character')) {
                header.classList.add('r34-section-character');
            } else if (text.includes('general')) {
                header.classList.add('r34-section-general');
            } else if (text.includes('meta') || text.includes('metadata')) {
                header.classList.add('r34-section-meta');
            } else if (text.includes('copyright')) {
                header.classList.add('r34-section-copyright');
            } else if (text.includes('artist')) {
                header.classList.add('r34-section-artist');
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

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

        const nodes = [];

        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        for (const node of nodes) {
            if (!node.nodeValue || !node.nodeValue.includes('Filter AI posts')) {continue;}
            node.nodeValue = node.nodeValue.replace(/Filter AI posts/g, 'Make Sam Altman EVIL');
        }
    }

  /* =========================================================
       СУУКА БИТУБИ СААС
       ========================================================= */
  function replaceGelbooruFooterText() {

    if (!document.body) {
        return;
    }

    const paragraphs = document.querySelectorAll('p');

    for (const paragraph of paragraphs) {
        if (!paragraph.textContent.includes('Serving ')
            || !paragraph.textContent.includes('Running ')
            || !paragraph.textContent.includes('Gelbooru')
            || !paragraph.textContent.includes('Beta 0.2')
        ) {continue;}

        /*
         * Не трогаем уже изменённый текст.
         */

        if (paragraph.textContent.includes('БИТУБИ СААААААС')) {continue;}

        /*
         * Находим непосредственно текстовый узел
         * после ссылки Gelbooru.
         */

        const link = paragraph.querySelector('a[href*="gelbooru.com"]');

        if (!link) {continue;}

        /*
         * Ищем текстовый узел после ссылки,
         * содержащий "Beta 0.2".
         */

        let node = link.nextSibling;

        while (node) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes( 'Beta 0.2')) {
                node.nodeValue = node.nodeValue.replace('Beta 0.2', 'Beta 0.2 - БИТУБИ СААААААС');
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

        setTimeout(updateUI,300);

        setTimeout(updateUI,1000);


        if (document.fonts &&document.fonts.ready) {
            document.fonts.ready.then(() => {
                        applyInterToElements();
                    }
                ).catch(() => {});
        }
    }


    /* =========================================================
       DOM READY
       ========================================================= */

    if (document.readyState ==='loading') {
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

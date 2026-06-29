var HTML = [
'<!DOCTYPE html>',
'<html lang="en" data-theme="dark">',
'<head>',
'<meta charset="UTF-8">',
'<meta name="viewport" content="width=device-width, initial-scale=1.0">',
'<title>ZyAI</title>',
'<link rel="icon" type="image/png" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<link rel="apple-touch-icon" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<meta name="description" content="ZyAI - Security-focused developer AI">',
'<meta property="og:title" content="ZyAI">',
'<meta property="og:image" content="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<meta name="twitter:card" content="summary">',
'<meta name="twitter:image" content="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<link rel="preconnect" href="https://fonts.googleapis.com">',
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">',
'<style>',
'*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }',
'[data-theme="dark"] {',
'  --bg: #1c1c1e; --surface: #2c2c2e; --border: #3a3a3c; --border-hover: #48484a;',
'  --text: #f5f5f7; --text2: #98989d; --muted: #636366;',
'  --green: #4ade80; --green-bg: #1c2e22; --green-border: #2d4a35;',
'  --user-bg: #3a3a3c; --btn-text: #0a0a0a;',
'  --code-bg: #141416; --scrollbar: #3a3a3c; --modal-bg: #2c2c2e;',
'  --sidebar-bg: #242426;',
'}',
'[data-theme="light"] {',
'  --bg: #fafafa; --surface: #fff; --border: #e8e8e8; --border-hover: #ccc;',
'  --text: #111; --text2: #666; --muted: #bbb;',
'  --green: #16a34a; --green-bg: #f0fdf4; --green-border: #bbf7d0;',
'  --user-bg: #f0f0f0; --btn-text: #fff;',
'  --code-bg: #f4f4f4; --scrollbar: #ddd; --modal-bg: #fff;',
'  --sidebar-bg: #f0f0f0;',
'}',
'html, body { height: 100%; overflow: hidden; }',
'body { background: var(--bg); color: var(--text); font-family: \'Inter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif; display: flex; transition: background 0.2s, color 0.2s; }',
'',
'/* SIDEBAR */',
'.sidebar { width: 52px; flex-shrink: 0; background: var(--sidebar-bg); border-right: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; padding: 10px 0; gap: 4px; z-index: 20; transition: width 0.22s cubic-bezier(0.4,0,0.2,1); overflow: hidden; }',
'.sidebar-logo { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; cursor: pointer; flex-shrink: 0; overflow: hidden; }',
'.sidebar-logo img { width: 32px; height: 32px; border-radius: 8px; object-fit: cover; display: block; }',
'.sidebar-divider { width: 28px; height: 1px; background: var(--border); margin: 4px 0; }',
'.sidebar-divider { width: 28px; height: 1px; background: var(--border); margin: 4px 0; transition: width 0.22s; }',
'.sb-btn { width: 32px; height: 32px; background: none; border: none; color: rgba(255,255,255,0.5); cursor: pointer; border-radius: 8px; display: flex; align-items: center; justify-content: flex-start; font-size: 14px; transition: all 0.15s; position: relative; flex-shrink: 0; text-decoration: none; padding: 0 8px; gap: 10px; white-space: nowrap; overflow: hidden; }',
'.sb-btn:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.9); }',
'.sb-btn[title]:hover::after { content: attr(title); position: absolute; left: 44px; background: var(--surface); border: 1px solid var(--border); color: var(--text); font-size: 11px; padding: 4px 8px; border-radius: 6px; white-space: nowrap; z-index: 100; pointer-events: none; }',
'.sb-bottom { margin-top: auto; display: flex; flex-direction: column; align-items: center; gap: 4px; width: 100%; padding-bottom: 8px; }',
'.user-avatar { width: 36px; height: 36px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--btn-text); cursor: pointer; flex-shrink: 0; overflow: hidden; transition: all 0.22s ease; white-space: nowrap; }',
'',
'/* MAIN */',
'.main { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }',
'',
'/* TOPBAR */',
'.topbar { display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 8px; }',
'.brand { font-size: 15px; font-weight: 800; letter-spacing: -0.03em; display: flex; align-items: center; gap: 6px; }',
'.brand em { font-style: normal; color: var(--green); }',
'.brand-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: glow 2s infinite; flex-shrink: 0; }',
'@keyframes glow { 0%,100%{opacity:1;box-shadow:0 0 4px var(--green)} 50%{opacity:0.4;box-shadow:none} }',
'.topbar-right { display: flex; gap: 6px; align-items: center; }',
'.model-select { background: var(--surface); border: 1px solid var(--border); color: var(--text2); font-family: inherit; font-size: 11px; padding: 5px 8px; border-radius: 8px; cursor: pointer; outline: none; max-width: 130px; }',
'.pill-btn { background: none; border: 1px solid var(--border); color: var(--text2); font-size: 12px; padding: 5px 11px; border-radius: 20px; cursor: pointer; font-family: inherit; transition: all 0.15s; white-space: nowrap; }',
'.pill-btn:hover { border-color: var(--green); color: var(--green); }',
'.icon-btn { background: none; border: 1px solid var(--border); color: var(--text2); font-size: 14px; width: 30px; height: 30px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0; }',
'.icon-btn:hover { border-color: var(--border-hover); color: var(--text); }',
'',
'/* APP CONTENT */',
'.app-content { flex: 1; display: flex; overflow: hidden; }',
'',
'/* CHAT PANEL */',
'.chat-panel { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }',
'.messages { flex: 1; overflow-y: auto; padding: 1.25rem 1rem 1rem; display: flex; flex-direction: column; gap: 1.25rem; scroll-behavior: smooth; max-width: 800px; width: 100%; margin: 0 auto; }',
'.messages::-webkit-scrollbar { width: 3px; }',
'.messages::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }',
'.empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 0.6rem; padding: 2rem 1rem; }',
'.empty-logo { font-size: clamp(1.8rem, 5vw, 2.8rem); font-weight: 900; letter-spacing: -0.05em; }',
'.empty-logo em { font-style: normal; color: var(--green); }',
'.chips { display: flex; flex-wrap: wrap; gap: 7px; justify-content: center; margin-top: 1rem; max-width: 480px; }',
'.chip { background: var(--surface); border: 1px solid var(--border); color: var(--text2); font-size: 12px; font-family: inherit; padding: 6px 12px; border-radius: 20px; cursor: pointer; transition: all 0.15s; text-align: left; }',
'.chip:hover { border-color: var(--green); color: var(--green); background: var(--green-bg); }',
'.msg { display: flex; flex-direction: column; gap: 3px; animation: fadeIn 0.2s ease; }',
'@keyframes fadeIn { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }',
'.msg-user { align-items: flex-end; }',
'.msg-ai { align-items: flex-start; }',
'.msg-meta { font-size: 10px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; padding: 0 4px; display: flex; align-items: center; gap: 5px; }',
'.msg-meta .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); }',
'.bubble { max-width: 88%; padding: 11px 15px; border-radius: 14px; font-size: 14px; line-height: 1.75; word-break: break-word; }',
'.bubble-user { background: var(--user-bg); border: 1px solid var(--border); border-bottom-right-radius: 4px; }',
'.bubble-ai { background: var(--green-bg); border: 1px solid var(--green-border); border-bottom-left-radius: 4px; }',
'.bubble-ai.loading { color: var(--muted); }',
'',
'@keyframes dots { 0%{opacity:0.2} 50%{opacity:1} 100%{opacity:0.2} }',
'.bubble-ai code { background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; padding: 1px 5px; font-size: 12px; font-family: \'SF Mono\', monospace; color: var(--green); }',
'.bubble-ai pre { background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin: 8px 0; overflow-x: auto; }',
'.bubble-ai pre code { background: none; border: none; padding: 0; color: var(--text2); font-size: 12px; }',
'.bubble-ai strong { font-weight: 600; }',
'.bubble-ai a { color: var(--green); text-decoration: none; }',
'.bubble-ai ul, .bubble-ai ol { padding-left: 1.25rem; margin: 6px 0; }',
'.bubble-ai li { margin: 3px 0; }',
'.msg-actions { display: flex; gap: 5px; padding: 0 4px; opacity: 0; transition: opacity 0.15s; flex-wrap: wrap; }',
'.msg:hover .msg-actions { opacity: 1; }',
'.action-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; padding: 3px 8px; border-radius: 6px; cursor: pointer; font-family: inherit; transition: all 0.15s; }',
'.action-btn:hover { color: var(--text); border-color: var(--border-hover); }',
'.action-btn.preview-btn { border-color: var(--green-border); color: var(--green); }',
'',
'',
'',
'.file-preview-wrap { padding: 0 1rem; max-width: 800px; margin: 0 auto; width: 100%; }',
'.file-preview { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 7px 12px; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text2); }',
'.file-preview-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }',
'.file-preview-remove { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 14px; }',
'.file-preview-remove:hover { color: #f87171; }',
'.input-area { flex-shrink: 0; padding: 0.6rem 1rem 0.75rem; border-top: 1px solid var(--border); }',
'.input-wrap { max-width: 800px; margin: 0 auto; }',
'.input-box { display: flex; align-items: flex-end; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; }',
'.input-box:focus-within { border-color: var(--green); box-shadow: 0 0 0 3px rgba(74,222,128,0.07); }',
'.chat-input { flex: 1; background: transparent; border: none; color: var(--text); font-size: 14px; padding: 12px 14px; outline: none; font-family: inherit; resize: none; max-height: 140px; line-height: 1.6; }',
'.chat-input::placeholder { color: var(--muted); }',
'.input-actions { display: flex; align-items: flex-end; padding: 5px; gap: 3px; }',
'.attach-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 15px; width: 32px; height: 32px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }',
'.attach-btn:hover { border-color: var(--green); color: var(--green); }',
'.send-btn { background: var(--green); border: none; color: var(--btn-text); font-size: 16px; width: 36px; height: 36px; cursor: pointer; flex-shrink: 0; border-radius: 10px; display: flex; align-items: center; justify-content: center; transition: opacity 0.15s; }',
'.send-btn:hover { opacity: 0.85; }',
'.send-btn:disabled { opacity: 0.3; cursor: not-allowed; }',
'.input-hint { font-size: 10px; color: var(--muted); text-align: center; margin-top: 5px; }',
'.file-input { display: none; }',
'',
'',
'/* API PANEL */',
'.api-panel { width: 0; flex-shrink: 0; display: flex; flex-direction: column; overflow: hidden; transition: width 0.3s ease; background: var(--surface); border-right: 1px solid var(--border); }',
'.api-panel.open { width: 320px; }',
'.api-header { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; }',
'.api-title { font-size: 12px; font-weight: 600; color: var(--text2); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }',
'.api-body { flex: 1; overflow-y: auto; padding: 12px; }',
'.api-body::-webkit-scrollbar { width: 3px; }',
'.api-body::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }',
'.api-section { margin-bottom: 16px; }',
'.api-section-title { font-size: 11px; font-weight: 600; color: var(--text2); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }',
'.api-input { width: 100%; background: var(--bg); border: 1px solid var(--border); color: var(--text); font-family: inherit; font-size: 13px; padding: 8px 10px; border-radius: 8px; outline: none; transition: border-color 0.15s; margin-bottom: 6px; }',
'.api-input:focus { border-color: var(--green); }',
'.api-btn { width: 100%; background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 13px; font-weight: 600; padding: 9px; border-radius: 8px; cursor: pointer; transition: opacity 0.15s; }',
'.api-btn:hover { opacity: 0.85; }',
'.api-key-box { background: var(--bg); border: 1px solid var(--green-border); border-radius: 8px; padding: 10px; margin-top: 8px; display: none; }',
'.api-key-box.visible { display: block; }',
'.api-key-label { font-size: 10px; color: var(--text2); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em; }',
'.api-key-value { font-size: 11px; font-family: monospace; color: var(--green); word-break: break-all; line-height: 1.5; }',
'.api-copy-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; padding: 3px 8px; border-radius: 5px; cursor: pointer; font-family: inherit; margin-top: 6px; transition: all 0.15s; }',
'.api-copy-btn:hover { color: var(--text); border-color: var(--border-hover); }',
'.api-endpoint { background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 10px; margin-bottom: 6px; }',
'.api-endpoint-method { font-size: 10px; font-weight: 700; color: var(--green); text-transform: uppercase; margin-bottom: 3px; }',
'.api-endpoint-path { font-size: 11px; font-family: monospace; color: var(--text); margin-bottom: 4px; }',
'.api-endpoint-desc { font-size: 11px; color: var(--text2); line-height: 1.4; }',
'.api-limit { font-size: 11px; color: var(--muted); text-align: center; margin-top: 8px; }',
'',
'/* PREVIEW PANEL */',
'.preview-panel { width: 0; flex-shrink: 0; display: flex; flex-direction: column; overflow: hidden; transition: width 0.3s ease; background: var(--surface); border-left: 1px solid var(--border); }',
'.preview-panel.open { width: 48%; }',
'.preview-header { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; }',
'.preview-title { font-size: 12px; font-weight: 600; color: var(--text2); text-transform: uppercase; letter-spacing: 0.05em; }',
'.preview-tabs { display: flex; gap: 4px; }',
'.preview-tab { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; font-family: inherit; padding: 3px 9px; border-radius: 6px; cursor: pointer; transition: all 0.15s; }',
'.preview-tab.active { background: var(--green); border-color: var(--green); color: var(--btn-text); }',
'.preview-close { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; padding: 2px 5px; border-radius: 4px; }',
'.preview-close:hover { color: var(--text); }',
'.preview-content { flex: 1; overflow: hidden; }',
'.preview-iframe { width: 100%; height: 100%; border: none; background: white; }',
'.preview-code { width: 100%; height: 100%; overflow: auto; padding: 1rem; font-family: \'SF Mono\', monospace; font-size: 12px; color: var(--text2); background: var(--code-bg); white-space: pre; line-height: 1.6; }',
'.preview-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--muted); font-size: 13px; gap: 8px; text-align: center; padding: 2rem; }',
'',
'/* MODALS */',
'.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1rem; }',
'.modal-overlay.hidden { display: none; }',
'.modal { background: var(--modal-bg); border: 1px solid var(--border); border-radius: 16px; padding: 1.75rem; width: 100%; max-width: 380px; }',
'.modal-title { font-size: 19px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.25rem; }',
'.modal-title em { font-style: normal; color: var(--green); }',
'.modal-sub { font-size: 13px; color: var(--text2); margin-bottom: 1.25rem; }',
'.modal-tabs { display: flex; margin-bottom: 1.25rem; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }',
'.modal-tab { flex: 1; background: none; border: none; color: var(--text2); font-family: inherit; font-size: 13px; padding: 8px; cursor: pointer; transition: all 0.15s; }',
'.modal-tab.active { background: var(--green); color: var(--btn-text); font-weight: 600; }',
'.field { margin-bottom: 10px; }',
'.field label { font-size: 12px; color: var(--text2); display: block; margin-bottom: 4px; }',
'.field input { width: 100%; background: var(--bg); border: 1px solid var(--border); color: var(--text); font-family: inherit; font-size: 14px; padding: 9px 12px; border-radius: 8px; outline: none; transition: border-color 0.15s; }',
'.field input:focus { border-color: var(--green); }',
'.modal-btn { width: 100%; background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 14px; font-weight: 700; padding: 11px; border-radius: 8px; cursor: pointer; margin-top: 4px; transition: opacity 0.15s; }',
'.modal-btn:hover { opacity: 0.85; }',
'.modal-err { font-size: 12px; color: #f87171; margin-top: 8px; text-align: center; min-height: 16px; }',
'.modal-skip { font-size: 12px; color: var(--text2); text-align: center; margin-top: 10px; cursor: pointer; }',
'.modal-skip:hover { color: var(--green); }',
'.disclaimer-modal { max-width: 480px; }',
'.disclaimer-modal h3 { font-size: 16px; font-weight: 700; margin-bottom: 1rem; }',
'.disclaimer-modal p { font-size: 13px; color: var(--text2); line-height: 1.7; margin-bottom: 0.75rem; }',
'.disclaimer-modal .close-btn { width: 100%; background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 14px; font-weight: 700; padding: 10px; border-radius: 8px; cursor: pointer; margin-top: 0.5rem; }',
'',
'',
'/* FOOTER */',
'.footer-bar { flex-shrink: 0; display: flex; align-items: center; justify-content: center; gap: 16px; padding: 8px 16px; border-top: 1px solid var(--border); background: var(--sidebar-bg); }',
'.footer-link { display: flex; align-items: center; gap: 5px; color: var(--muted); font-size: 11px; text-decoration: none; transition: color 0.15s; }',
'.footer-link:hover { color: var(--text2); }',
'.footer-link svg { width: 14px; height: 14px; fill: currentColor; }',
'.footer-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--border); }',
'/* AVATAR MENU */',
'.avatar-menu { position: fixed; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 6px; min-width: 180px; z-index: 300; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }',
'.avatar-menu-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 13px; color: var(--text2); transition: all 0.15s; text-decoration: none; }',
'.avatar-menu-item:hover { background: var(--bg); color: var(--text); }',
'.avatar-menu-item svg { width: 15px; height: 15px; flex-shrink: 0; }',
'.avatar-menu-divider { height: 1px; background: var(--border); margin: 4px 0; }',
'',
'',
'/* SETTINGS MODAL */',
'.profile-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1rem; }',
'.profile-modal.hidden { display: none; }',
'.profile-box { background: var(--modal-bg); border: 1px solid var(--border); border-radius: 20px; width: 100%; max-width: 860px; height: 580px; display: flex; overflow: hidden; position: relative; }',
'.settings-sidebar { width: 200px; flex-shrink: 0; background: var(--bg); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 1rem 0; }',
'.settings-sidebar-top { padding: 0 1rem 0.75rem; border-bottom: 1px solid var(--border); margin-bottom: 0.5rem; }',
'.settings-user-avatar { width: 32px; height: 32px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--btn-text); margin-bottom: 5px; }',
'.settings-user-email { font-size: 11px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }',
'.settings-nav { flex: 1; overflow-y: auto; padding: 0 0.5rem; }',
'.settings-nav-item { display: flex; align-items: center; gap: 9px; padding: 7px 10px; border-radius: 8px; cursor: pointer; font-size: 13px; color: var(--text2); transition: all 0.15s; text-decoration: none; border: none; background: none; font-family: inherit; width: 100%; text-align: left; }',
'.settings-nav-item:hover { background: var(--surface); color: var(--text); }',
'.settings-nav-item.active { background: var(--surface); color: var(--text); font-weight: 600; }',
'.settings-nav-item svg { width: 14px; height: 14px; flex-shrink: 0; opacity: 0.65; }',
'.settings-nav-item.active svg { opacity: 1; }',
'.settings-nav-divider { height: 1px; background: var(--border); margin: 4px 8px; }',
'.settings-bottom { padding: 0.75rem 1rem; border-top: 1px solid var(--border); }',
'.settings-content { flex: 1; overflow-y: auto; padding: 1.5rem; }',
'.settings-content::-webkit-scrollbar { width: 3px; }',
'.settings-content::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }',
'.settings-panel { display: none; }',
'.settings-panel.active { display: block; }',
'.settings-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1.25rem; }',
'.settings-section { background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; }',
'.settings-section-title { font-size: 10px; font-weight: 600; color: var(--text2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }',
'.settings-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); }',
'.settings-row:last-child { border-bottom: none; padding-bottom: 0; }',
'.settings-row-label { font-size: 13px; color: var(--text); }',
'.settings-row-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }',
'.settings-row-value { font-size: 12px; color: var(--text2); }',
'.settings-btn { background: none; border: 1px solid var(--border); color: var(--text2); font-family: inherit; font-size: 12px; padding: 4px 10px; border-radius: 7px; cursor: pointer; transition: all 0.15s; }',
'.settings-btn:hover { border-color: var(--green); color: var(--green); }',
'.settings-progress { height: 5px; background: var(--border); border-radius: 3px; overflow: hidden; margin-top: 8px; }',
'.settings-progress-bar { height: 100%; background: var(--green); border-radius: 3px; transition: width 0.3s; }',
'.settings-badge { display: inline-flex; background: var(--green-bg); border: 1px solid var(--green-border); color: var(--green); font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 20px; text-transform: uppercase; }',
'.settings-link { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; border-bottom: 1px solid var(--border); text-decoration: none; color: var(--text2); font-size: 13px; transition: color 0.15s; }',
'.settings-link:last-child { border-bottom: none; }',
'.settings-link:hover { color: var(--green); }',
'.profile-close { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 14px; width: 28px; height: 28px; border-radius: 7px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; position: absolute; top: 1rem; right: 1rem; z-index: 10; }',
'.profile-close:hover { color: var(--text); }',
'.profile-api-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-family: inherit; transition: all 0.15s; }',
'.profile-api-btn:hover { color: var(--text); border-color: var(--border-hover); }',
'.profile-no-api { font-size: 12px; color: var(--muted); margin-bottom: 6px; }',
'.profile-api-key { font-size: 11px; font-family: monospace; color: var(--green); word-break: break-all; line-height: 1.5; margin-bottom: 6px; }',
'',
'/* LANGUAGE SELECTOR */',
'.lang-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 200; display: flex; align-items: center; justify-content: center; }',
'.lang-modal.hidden { display: none; }',
'.lang-box { background: var(--modal-bg); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; width: 100%; max-width: 360px; }',
'.lang-title { font-size: 15px; font-weight: 700; margin-bottom: 1rem; }',
'.lang-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }',
'.lang-option { background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 10px 14px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 13px; transition: all 0.15s; }',
'.lang-option:hover { border-color: var(--green); color: var(--green); }',
'.lang-option.active { border-color: var(--green); background: var(--green-bg); color: var(--green); }',
'.lang-flag { font-size: 18px; }',
'',
'/* MOBILE */',
'@media (max-width: 640px) {',
'  .sidebar { width: 44px; }',
'  .model-select { max-width: 110px; }',
'  .preview-panel.open { position: fixed; inset: 0; width: 100%; z-index: 50; }',
'  .search-panel.open { position: fixed; left: 64px; top: 0; bottom: 0; z-index: 50; }',
'  .bubble { max-width: 95%; }',
'  .topbar { padding: 0.5rem 0.75rem; }',
'}',
'/* HELP WIDGET */',
'.help-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 250; display: flex; align-items: center; justify-content: center; padding: 1rem; }',
'.help-modal.hidden { display: none; }',
'.help-box { background: var(--modal-bg); border: 1px solid var(--border); border-radius: 20px; width: 100%; max-width: 420px; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; }',
'.help-hero { background: linear-gradient(135deg, #0a1a0f 0%, #1c2e22 100%); padding: 1.75rem 1.5rem 1.5rem; position: relative; flex-shrink: 0; }',
'.help-hero-close { position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.08); border: none; color: #fff; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }',
'.help-hero-close:hover { background: rgba(255,255,255,0.15); }',
'.help-hero-logo { font-size: 13px; font-weight: 800; color: #fff; letter-spacing: -0.03em; margin-bottom: 1rem; }',
'.help-hero-logo em { font-style: normal; color: var(--green); }',
'.help-hero-title { font-size: 22px; font-weight: 800; color: #fff; line-height: 1.3; letter-spacing: -0.03em; }',
'.help-body { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 8px; }',
'.help-body::-webkit-scrollbar { width: 3px; }',
'.help-body::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }',
'.help-status { display: flex; align-items: center; gap: 10px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; }',
'.help-status-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--green); flex-shrink: 0; box-shadow: 0 0 6px var(--green); }',
'.help-status-text { font-size: 13px; font-weight: 600; color: var(--text); }',
'.help-status-sub { font-size: 11px; color: var(--muted); margin-top: 1px; }',
'.help-action { display: flex; align-items: center; justify-content: space-between; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; cursor: pointer; transition: all 0.15s; text-decoration: none; }',
'.help-action:hover { border-color: var(--green); background: var(--green-bg); }',
'.help-action-left { display: flex; align-items: center; gap: 12px; }',
'.help-action-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--green); flex-shrink: 0; }',
'.help-action-title { font-size: 13px; font-weight: 600; color: var(--text); }',
'.help-action-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }',
'.help-action-arrow { color: var(--muted); font-size: 18px; }',
'.help-section-title { font-size: 10px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 4px 0; }',
'.help-link { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-radius: 10px; cursor: pointer; transition: background 0.15s; text-decoration: none; }',
'.help-link:hover { background: var(--bg); }',
'.help-link-text { font-size: 13px; color: var(--text2); }',
'.help-link-arrow { font-size: 14px; color: var(--muted); }',
'.help-form { background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 14px; display: none; flex-direction: column; gap: 8px; }',
'.help-form.open { display: flex; }',
'.help-form-title { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }',
'.help-field { display: flex; flex-direction: column; gap: 4px; }',
'.help-field label { font-size: 11px; color: var(--text2); }',
'.help-field input, .help-field textarea { background: var(--surface); border: 1px solid var(--border); color: var(--text); font-family: inherit; font-size: 13px; padding: 8px 10px; border-radius: 8px; outline: none; transition: border-color 0.15s; resize: none; }',
'.help-field input:focus, .help-field textarea:focus { border-color: var(--green); }',
'.help-submit { background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 13px; font-weight: 700; padding: 10px; border-radius: 8px; cursor: pointer; transition: opacity 0.15s; margin-top: 4px; }',
'.help-submit:hover { opacity: 0.85; }',
'.help-sent { font-size: 13px; color: var(--green); text-align: center; padding: 6px; display: none; }',
'.help-sent.show { display: block; }',
'',
'/* SUBSCRIPTION - 3 PLAN */',
'.plan-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 1rem; }',
'/* ONBOARDING */',
'.onboard { position: fixed; inset: 0; background: var(--bg); z-index: 500; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center; }',
'.onboard.hidden { display: none; }',
'.onboard-logo { font-size: clamp(1.6rem, 5vw, 2.5rem); font-weight: 900; letter-spacing: -0.05em; margin-bottom: 0.75rem; }',
'.onboard-logo em { font-style: normal; color: var(--green); }',
'.onboard-tagline { font-size: 20px; font-weight: 500; color: var(--text2); margin-bottom: 0.5rem; letter-spacing: -0.01em; }',
'.onboard-sub { font-size: 14px; color: var(--muted); max-width: 340px; line-height: 1.7; margin-bottom: 2.5rem; }',
'.onboard-btns { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }',
'.onboard-start { background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 12px; cursor: pointer; transition: opacity 0.15s; }',
'.onboard-start:hover { opacity: 0.85; }',
'.onboard-signin { background: none; border: 1px solid var(--border); color: var(--text2); font-family: inherit; font-size: 14px; padding: 12px 28px; border-radius: 12px; cursor: pointer; transition: all 0.15s; }',
'.onboard-signin:hover { border-color: var(--border-hover); color: var(--text); }',
'',
'.sidebar.expanded { width: 200px; align-items: stretch; }',
'.sidebar.expanded .sb-btn { width: auto; padding: 0 12px; }',
'.sidebar.expanded .sidebar-divider { width: calc(100% - 24px); margin: 4px 12px; }',
'.sidebar.expanded .sb-bottom { padding: 0 8px; align-items: stretch; }',
'.sidebar.expanded .user-avatar { width: 100%; border-radius: 10px; justify-content: flex-start; gap: 10px; padding: 0 12px; height: 44px; font-size: 13px; }',
'.sidebar.expanded .ua-info { display: flex; }',
'.sb-label { display: none; font-size: 13px; font-weight: 500; letter-spacing: -0.01em; }',
'.sidebar.expanded .sb-label { display: inline; }',
'.sidebar-toggle { width: 32px; height: 28px; background: none; border: none; color: rgba(255,255,255,0.4); cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; margin-bottom: 2px; flex-shrink: 0; }',
'.sidebar-toggle:hover { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.08); }',
'.sidebar.expanded .sidebar-toggle { width: auto; padding: 0 12px; justify-content: flex-start; gap: 10px; }',
'.sidebar.expanded .sb-btn[title]:hover::after { display: none; }',
'',
'/* BUBBLE LOADING */',
'.bubble-loading-wrap { display: flex; align-items: center; gap: 8px; }',
'.bubble-loading-logo { width: 20px; height: 20px; border-radius: 4px; animation: blPulse 1.4s ease-in-out infinite; }',
'.bubble-loading-dots { display: flex; gap: 3px; align-items: center; }',
'.bubble-loading-dots span { width: 4px; height: 4px; border-radius: 50%; background: var(--green); display: inline-block; animation: blBounce 1.4s infinite ease-in-out both; }',
'.bubble-loading-dots span:nth-child(2) { animation-delay: 0.2s; }',
'.bubble-loading-dots span:nth-child(3) { animation-delay: 0.4s; }',
'@keyframes blPulse { 0%,100%{opacity:0.35;transform:scale(0.85)} 50%{opacity:1;transform:scale(1)} }',
'@keyframes blBounce { 0%,80%,100%{transform:scale(0);opacity:0.3} 40%{transform:scale(1.2);opacity:1} }',
'',
'.ua-info { display: none; flex-direction: column; gap: 1px; overflow: hidden; min-width: 0; }',
'#ua-email { font-size: 11px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 130px; }',
'#ua-plan { font-size: 10px; opacity: 0.65; }',
'</style>',
'</head>',
'<body>',
'',
'<!-- ONBOARDING -->',
'<div class="onboard" id="onboard">',
'  <div class="onboard-logo">Zy<em>AI</em></div>',
'  <div class="onboard-tagline">Always by your side.</div>',
'  <div class="onboard-sub">For everyone — from curious minds to seasoned developers.</div>',
'  <div class="onboard-btns">',
'    <button class="onboard-start" onclick="startGuest()">Get Started</button>',
'    <button class="onboard-signin" onclick="startSignIn()">Sign In</button>',
'  </div>',
'</div>',
'',
'',
'<!-- HELP MODAL -->',
'<div class="help-modal hidden" id="help-modal">',
'  <div class="help-box">',
'    <div class="help-hero">',
'      <button class="help-hero-close" onclick="closeHelp()">&#10005;</button>',
'      <div class="help-hero-logo">Zy<em>AI</em></div>',
'      <div class="help-hero-title">Need help?<br>We\'re here for you.</div>',
'    </div>',
'    <div class="help-body">',
'      <div class="help-status">',
'        <div class="help-status-dot"></div>',
'        <div><div class="help-status-text">All Systems Operational</div><div class="help-status-sub">zyai.org is running normally</div></div>',
'      </div>',
'      <div class="help-action" onclick="toggleHelpForm()">',
'        <div class="help-action-left">',
'          <div class="help-action-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>',
'          <div><div class="help-action-title">Send us a message</div><div class="help-action-sub">contact@zyai.org · reply within 24h</div></div>',
'        </div>',
'        <div class="help-action-arrow">&#8250;</div>',
'      </div>',
'      <div class="help-form" id="help-form">',
'        <div class="help-form-title">Send a message</div>',
'        <div class="help-field"><label>Email</label><input type="email" id="help-email" placeholder="you@example.com" /></div>',
'        <div class="help-field"><label>Subject</label><input type="text" id="help-subject" placeholder="Brief description" /></div>',
'        <div class="help-field"><label>Message</label><textarea id="help-message" rows="4" placeholder="Describe your issue..."></textarea></div>',
'        <button class="help-submit" onclick="submitHelp()">Send Message</button>',
'        <div class="help-sent" id="help-sent">&#10003; Message sent! We\'ll get back to you soon.</div>',
'      </div>',
'      <div class="help-section-title">Resources</div>',
'      <a class="help-link" href="https://t.me/zyorgbot" target="_blank"><span class="help-link-text">Telegram Support</span><span class="help-link-arrow">&#8250;</span></a>',
'      <a class="help-link" href="https://discord.gg/DpPUDUYAXS" target="_blank"><span class="help-link-text">Discord Community</span><span class="help-link-arrow">&#8250;</span></a>',
'      <a class="help-link" href="https://github.com/b71labs" target="_blank"><span class="help-link-text">GitHub</span><span class="help-link-arrow">&#8250;</span></a>',
'      <a class="help-link" href="/privacy" target="_blank"><span class="help-link-text">Privacy Policy</span><span class="help-link-arrow">&#8250;</span></a>',
'    </div>',
'  </div>',
'</div>',
'',
'',
'',
'<!-- SETTINGS MODAL -->',
'<div class="profile-modal hidden" id="profile-modal">',
'  <div class="profile-box">',
'    <button class="profile-close" onclick="closeProfile()">&#10005;</button>',
'    <div class="settings-sidebar">',
'      <div class="settings-sidebar-top">',
'        <div class="settings-user-avatar" id="profile-avatar-big">?</div>',
'        <div class="settings-user-email" id="profile-email-text">-</div>',
'      </div>',
'      <div class="settings-nav">',
'        <button class="settings-nav-item active" onclick="showSettingsPanel(\'account\')" id="snav-account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Account</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'privacy\')" id="snav-privacy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Privacy</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'billing\')" id="snav-billing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>Billing</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'usage\')" id="snav-usage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>Usage</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'capabilities\')" id="snav-capabilities"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>Capabilities</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'connectors\')" id="snav-connectors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V12"/><path d="M5 12H19"/><path d="M8 12V7a4 4 0 0 1 8 0v5"/><circle cx="12" cy="19" r="3"/></svg>Connectors</button>',
'        <div class="settings-nav-divider"></div>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'zyai-code\')" id="snav-zyai-code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>ZyAI Code</button>',
'        <button class="settings-nav-item" onclick="showSettingsPanel(\'zyai-chrome\')" id="snav-zyai-chrome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>ZyAI in Chrome</button>',
'      </div>',
'      <div class="settings-bottom">',
'        <button class="settings-nav-item" onclick="logout()" style="color:#f87171;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Sign out</button>',
'      </div>',
'    </div>',
'    <div class="settings-content">',
'      <div class="settings-panel active" id="spanel-account">',
'        <div class="settings-title">Account</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Profile</div>',
'          <div class="settings-row"><div><div class="settings-row-label">Email</div><div class="settings-row-sub" id="profile-email-text2">-</div></div></div>',
'          <div class="settings-row"><div><div class="settings-row-label">Member since</div><div class="settings-row-sub" id="profile-joined-text">-</div></div></div>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Appearance</div>',
'          <div class="settings-row">',
'            <div class="settings-row-label">Theme</div>',
'            <div style="display:flex;gap:6px;">',
'              <button class="settings-btn" id="theme-btn-dark" onclick="setTheme(\'dark\')">Dark</button>',
'              <button class="settings-btn" id="theme-btn-light" onclick="setTheme(\'light\')">Light</button>',
'            </div>',
'          </div>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">API Key</div>',
'          <div id="profile-api-content"><div class="profile-no-api">No API key yet.</div><button class="profile-api-btn" onclick="generateProfileKey()">Generate API Key</button></div>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-privacy">',
'        <div class="settings-title">Privacy</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Legal</div>',
'          <a class="settings-link" href="/privacy" target="_blank">Privacy Policy <span>&#8250;</span></a>',
'          <a class="settings-link" href="#" onclick="closeProfile();showDisclaimer();return false;">Terms & Disclaimer <span>&#8250;</span></a>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Your Data</div>',
'          <div class="settings-row"><div class="settings-row-label">Chat history</div><div class="settings-row-value">Saved to account</div></div>',
'          <div class="settings-row"><div class="settings-row-label">File uploads</div><div class="settings-row-value">Not stored</div></div>',
'          <div class="settings-row"><div class="settings-row-label">Cookies</div><div class="settings-row-value">None</div></div>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-billing">',
'        <div class="settings-title">Billing</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Current Plan</div>',
'          <div class="settings-row"><div><div class="settings-row-label">Plan</div><div class="settings-row-sub" id="billing-plan-name">Free</div></div><span class="settings-badge" id="billing-plan-badge">Free</span></div>',
'          <div class="settings-row" id="billing-expires-row" style="display:none"><div class="settings-row-label">Expires</div><div class="settings-row-value" id="billing-expires">-</div></div>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Payment</div>',
'          <div style="text-align:center;padding:1.25rem 0;"><div style="font-size:1.75rem;margin-bottom:0.5rem;">&#128179;</div><div style="font-size:13px;color:var(--text2);margin-bottom:0.25rem;">Card payments coming soon</div><div style="font-size:11px;color:var(--muted);">Stripe integration in progress · <a href="mailto:contact@zyai.org" style="color:var(--green);">Early access</a></div></div>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-usage">',
'        <div class="settings-title">Usage</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Chats</div>',
'          <div class="settings-row"><div class="settings-row-label">Today</div><div class="settings-row-value" id="stat-today">-</div></div>',
'          <div class="settings-row"><div class="settings-row-label">Total</div><div class="settings-row-value" id="stat-total">-</div></div>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">API</div>',
'          <div class="settings-row"><div class="settings-row-label">Requests remaining today</div><div class="settings-row-value" id="stat-api-remaining">-</div></div>',
'          <div class="settings-progress"><div class="settings-progress-bar" id="usage-bar" style="width:0%"></div></div>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-capabilities">',
'        <div class="settings-title">Capabilities</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">AI Model</div>',
'          <div class="settings-row"><div class="settings-row-label">Active model</div><select class="model-select" id="model-select-settings" onchange="document.getElementById(\'model-select\').value=this.value;saveModel();"><option value="@cf/openai/gpt-oss-120b">gpt-oss-120b</option><option value="@cf/meta/llama-4-scout-17b-16e-instruct">llama-4-scout</option><option value="@cf/deepseek-ai/deepseek-r1-distill-qwen-32b">deepseek-r1-32b</option><option value="@cf/zai-org/glm-5.2">glm-5.2</option><option value="@cf/moonshotai/kimi-k2.6">kimi-k2.6</option><option value="@cf/google/gemma-4-26b-a4b-it">gemma-4-26b</option><option value="@cf/openai/gpt-oss-20b">gpt-oss-20b</option><option value="@cf/meta/llama-3.3-70b-instruct-fp8-fast">llama-3.3-70b</option><option value="@cf/zai-org/glm-4.7-flash">glm-4.7-flash</option><option value="@cf/meta/llama-3.2-3b-instruct">llama-3.2-3b</option></select></div>',
'        </div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Language</div>',
'          <div class="settings-row"><div class="settings-row-label">Interface language</div><button class="settings-btn" onclick="closeProfile();showLang();">Change</button></div>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-connectors">',
'        <div class="settings-title">Connectors</div>',
'        <div class="settings-section">',
'          <div class="settings-section-title">Community</div>',
'          <a class="settings-link" href="https://t.me/zyorgbot" target="_blank">Telegram <span>&#8250;</span></a>',
'          <a class="settings-link" href="https://discord.gg/DpPUDUYAXS" target="_blank">Discord <span>&#8250;</span></a>',
'          <a class="settings-link" href="https://github.com/b71labs" target="_blank">GitHub <span>&#8250;</span></a>',
'        </div>',
'      </div>',
'      <div class="settings-panel" id="spanel-zyai-code">',
'        <div class="settings-title">ZyAI Code</div>',
'        <div class="settings-section"><div style="text-align:center;padding:2rem 0;"><div style="font-size:2rem;margin-bottom:0.5rem;">&#128187;</div><div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:0.25rem;">ZyAI Code</div><div style="font-size:12px;color:var(--muted);">AI-powered coding assistant — coming soon</div></div></div>',
'      </div>',
'      <div class="settings-panel" id="spanel-zyai-chrome">',
'        <div class="settings-title">ZyAI in Chrome</div>',
'        <div class="settings-section"><div style="text-align:center;padding:2rem 0;"><div style="font-size:2rem;margin-bottom:0.5rem;">&#127760;</div><div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:0.25rem;">ZyAI in Chrome</div><div style="font-size:12px;color:var(--muted);">Browse and act on the web — coming soon</div></div></div>',
'      </div>',
'    </div>',
'  </div>',
'</div>',
'',
'<!-- LANGUAGE MODAL -->',
'<div class="lang-modal hidden" id="lang-modal">',
'  <div class="lang-box">',
'    <div class="lang-title">Select Language</div>',
'    <div class="lang-grid">',
'      <div class="lang-option" onclick="setLang(\'en\')"><span class="lang-flag">&#127482;&#127480;</span> English</div>',
'      <div class="lang-option" onclick="setLang(\'tr\')"><span class="lang-flag">&#127481;&#127479;</span> Türkçe</div>',
'      <div class="lang-option" onclick="setLang(\'de\')"><span class="lang-flag">&#127465;&#127466;</span> Deutsch</div>',
'      <div class="lang-option" onclick="setLang(\'fr\')"><span class="lang-flag">&#127467;&#127479;</span> Français</div>',
'      <div class="lang-option" onclick="setLang(\'es\')"><span class="lang-flag">&#127466;&#127480;</span> Español</div>',
'      <div class="lang-option" onclick="setLang(\'ar\')"><span class="lang-flag">&#127480;&#127462;</span> العربية</div>',
'      <div class="lang-option" onclick="setLang(\'ja\')"><span class="lang-flag">&#127471;&#127477;</span> 日本語</div>',
'      <div class="lang-option" onclick="setLang(\'zh\')"><span class="lang-flag">&#127464;&#127475;</span> 中文</div>',
'    </div>',
'  </div>',
'</div>',
'',
'<!-- AUTH MODAL -->',
'<div class="modal-overlay hidden" id="modal-auth">',
'  <div class="modal">',
'    <div class="modal-title">Zy<em>AI</em></div>',
'    <div class="modal-sub">Sign in to save your chat history</div>',
'    <div class="modal-tabs">',
'      <button class="modal-tab active" id="tab-login" onclick="switchTab(\'login\')">Login</button>',
'      <button class="modal-tab" id="tab-register" onclick="switchTab(\'register\')">Register</button>',
'    </div>',
'    <div class="field"><label>Email</label><input type="email" id="auth-email" placeholder="you@example.com" /></div>',
'    <div class="field"><label>Password</label><input type="password" id="auth-password" placeholder="••••••••" /></div>',
'    <button class="modal-btn" id="auth-btn" onclick="doAuth()">Login</button>',
'    <div class="modal-err" id="auth-err"></div>',
'    <div class="modal-skip" onclick="skipAuth()">Continue without account →</div>',
'  </div>',
'</div>',
'',
'<!-- DISCLAIMER MODAL -->',
'<div class="modal-overlay hidden" id="modal-disclaimer">',
'  <div class="modal disclaimer-modal">',
'    <h3>Terms & Disclaimer</h3>',
'    <p>By using ZyAI, you acknowledge that AI-generated responses may contain errors and you assume full responsibility for any decisions made based on this information.</p>',
'    <p>Laws and regulations vary by jurisdiction. ZyAI does not provide legal, financial, or professional advice.</p>',
'    <p>Unauthorized copying, reproduction, or distribution of our code and content is strictly prohibited.</p>',
'    <p style="color: var(--muted); font-size: 12px;">2026 ZyAI. All rights reserved.</p>',
'    <button class="close-btn" onclick="closeDisclaimer()">I Understand</button>',
'  </div>',
'</div>',
'',
'<!-- SIDEBAR -->',
'<div class="sidebar" id="sidebar">',
'  <button class="sidebar-toggle" id="sidebar-toggle" onclick="toggleSidebar()" title="Menu">',
'    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
'    <span class="sb-label" style="font-size:14px;font-weight:800;letter-spacing:-0.03em;">Zy<em style="font-style:normal;color:var(--green);">AI</em></span>',
'  </button>',
'  <button class="sb-btn active" id="sb-chat" onclick="setPanel(\'chat\')">',
'    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
'    <span class="sb-label">Chat</span>',
'  </button>',
'  <button class="sb-btn" id="sb-download" onclick="downloadLast()" title="Download">',
'    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
'    <span class="sb-label">Download</span>',
'  </button>',
'  <div class="sidebar-divider"></div>',
'  <button class="sb-btn" id="sb-api" onclick="toggleAPI()">',
'    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
'    <span class="sb-label">API</span>',
'  </button>',
'  <div class="sb-bottom">',
'    <div class="user-avatar" id="user-avatar" onclick="showUserMenu()" oncontextmenu="showAvatarMenu(event)"><span id="ua-letter">?</span><div class="sb-label ua-info"><div id="ua-email"></div><div id="ua-plan">Free</div></div></div>',
'  </div>',
'</div>',
'',
'<!-- MAIN -->',
'<div class="main">',
'  <div class="topbar">',
'    <div class="brand"><div class="brand-dot"></div>Zy<em>AI</em></div>',
'    <div class="topbar-right">',
'      <button class="icon-btn" onclick="showUserMenu()" title="Account">&#128100;</button>',
'    </div>',
'  </div>',
'',
'  <div class="app-content">',
'',
'',
'    <!-- API PANEL -->',
'    <div class="api-panel" id="api-panel">',
'      <div class="api-header">',
'        <div class="api-title">Developer API</div>',
'      </div>',
'      <div class="api-body">',
'        <div class="api-section">',
'          <div class="api-section-title">Get API Key</div>',
'          <input class="api-input" id="api-email" type="email" placeholder="your@email.com"/>',
'          <button class="api-btn" onclick="getAPIKey()">Generate Key</button>',
'          <div class="api-key-box" id="api-key-box">',
'            <div class="api-key-label">Your API Key</div>',
'            <div class="api-key-value" id="api-key-value"></div>',
'            <button class="api-copy-btn" onclick="copyAPIKey()">Copy</button>',
'          </div>',
'          <div class="api-limit">100 requests / day · Free</div>',
'        </div>',
'',
'        <div class="api-section">',
'          <div class="api-section-title">Endpoints</div>',
'          <div class="api-endpoint">',
'            <div class="api-endpoint-method">GET</div>',
'            <div class="api-endpoint-path">/api/v1/status</div>',
'            <div class="api-endpoint-desc">API status and stats</div>',
'          </div>',
'          <div class="api-endpoint">',
'            <div class="api-endpoint-method">POST</div>',
'            <div class="api-endpoint-path">/api/v1/chat</div>',
'            <div class="api-endpoint-desc">Ask a question · Body: {"question": "..."}</div>',
'          </div>',
'          <div class="api-endpoint">',
'            <div class="api-endpoint-method">GET</div>',
'            <div class="api-endpoint-path">/api/v1/search?q=...</div>',
'            <div class="api-endpoint-desc">Search knowledge base</div>',
'          </div>',
'          <div class="api-endpoint">',
'            <div class="api-endpoint-method">POST</div>',
'            <div class="api-endpoint-path">/api/v1/keys</div>',
'            <div class="api-endpoint-desc">Generate API key · Body: {"email": "..."}</div>',
'          </div>',
'        </div>',
'',
'        <div class="api-section">',
'          <div class="api-section-title">Usage</div>',
'          <div class="api-endpoint">',
'            <div class="api-endpoint-desc" style="font-family:monospace;font-size:10px;line-height:1.8;color:var(--text2);">',
'              curl -X POST https://zyai.org/api/v1/chat \\<br>',
'              -H "Authorization: Bearer YOUR_KEY" \\<br>',
'              -H "Content-Type: application/json" \\<br>',
'              -d \'{"question": "What is reentrancy?"}\'',
'            </div>',
'          </div>',
'        </div>',
'      </div>',
'    </div>',
'',
'    <div class="chat-panel" id="chat-panel">',
'      <div class="messages" id="messages">',
'        <div class="empty-state" id="empty">',
'          <div class="empty-logo">Zy<em>AI</em></div>',

'        </div>',
'      </div>',
'      <div class="input-area">',
'        <div class="input-wrap">',
'          <div class="file-preview-wrap" id="file-preview-area"></div>',
'          <div class="input-box">',
'            <textarea class="chat-input" id="input" placeholder="Ask anything..." rows="1"></textarea>',
'            <div class="input-actions">',
'              <select class="model-select" id="model-select" onchange="saveModel()" style="height:32px;border-radius:8px;font-size:11px;padding:0 6px;"><option value="@cf/openai/gpt-oss-120b">gpt-oss-120b</option><option value="@cf/meta/llama-4-scout-17b-16e-instruct">llama-4-scout</option><option value="@cf/deepseek-ai/deepseek-r1-distill-qwen-32b">deepseek-r1-32b</option><option value="@cf/zai-org/glm-5.2">glm-5.2</option><option value="@cf/moonshotai/kimi-k2.6">kimi-k2.6</option><option value="@cf/google/gemma-4-26b-a4b-it">gemma-4-26b</option><option value="@cf/openai/gpt-oss-20b">gpt-oss-20b</option><option value="@cf/meta/llama-3.3-70b-instruct-fp8-fast">llama-3.3-70b</option><option value="@cf/zai-org/glm-4.7-flash">glm-4.7-flash</option><option value="@cf/meta/llama-3.2-3b-instruct">llama-3.2-3b</option></select>',
'              <button class="attach-btn" onclick="document.getElementById(\'file-input\').click()" title="Attach file">&#128206;</button>',
'              <button class="send-btn" id="send-btn" onclick="send()">&#8593;</button>',
'            </div>',
'          </div>',
'          <input type="file" id="file-input" class="file-input" accept=".txt,.js,.ts,.py,.sol,.html,.css,.json,.md,.jsx,.tsx,.rs,.go,.java,.cpp,.c,.php,.pdf,.doc,.docx,.xls,.xlsx,.csv" onchange="handleFile(this)" />',
'          <div class="input-hint">Enter to send · Shift+Enter for new line · 📎 PDF, Word, Excel, code</div>',
'        </div>',
'      </div>',
'    </div>',
'',
'    <!-- PREVIEW PANEL -->',
'    <div class="preview-panel" id="preview-panel">',
'      <div class="preview-header">',
'        <div class="preview-title">Preview</div>',
'        <div class="preview-tabs">',
'          <button class="preview-tab active" id="ptab-preview" onclick="switchPreview(\'preview\')">Preview</button>',
'          <button class="preview-tab" id="ptab-code" onclick="switchPreview(\'code\')">Code</button>',
'        </div>',
'        <button class="preview-close" onclick="closePreview()">&#10005;</button>',
'      </div>',
'      <div class="preview-content" id="preview-content">',
'        <div class="preview-empty">No preview yet.<br><br>Ask AI to build something!</div>',
'      </div>',
'    </div>',
'',
'  </div>',
'',

'',
'</div>',
'',
'<script>',
'const WORKER = \'https://zyai.org\';',
'let history = [];',
'let loading = false;',
'let currentUser = null;',
'let authTab = \'login\';',
'let currentCode = \'\';',
'let previewMode = \'preview\';',
'let attachedFile = null;',
'',
'const LANG_PROMPTS = {',
'  en: \'Always respond in English.\',',
'  tr: \'Her zaman Türkçe yanıt ver.\',',
'  de: \'Antworte immer auf Deutsch.\',',
'  fr: \'Réponds toujours en français.\',',
'  es: \'Responde siempre en español.\',',
'  ar: \'أجب دائماً باللغة العربية.\',',
'  ja: \'常に日本語で回答してください。\',',
'  zh: \'始终用中文回答。\'',
'};',
'',
'const UI_STRINGS = {',
'  en: { placeholder: \'Ask anything...\', newChat: \'new chat\', getStarted: \'Get Started\', signIn: \'Sign In\', hint: \'Enter to send · Shift+Enter for new line\' },',
'  tr: { placeholder: \'Ne sormak istersiniz?\', newChat: \'yeni sohbet\', getStarted: \'Başla\', signIn: \'Giriş Yap\', hint: \'Enter ile gönder · Shift+Enter yeni satır\' },',
'  de: { placeholder: \'Stell eine Frage...\', newChat: \'Neuer Chat\', getStarted: \'Loslegen\', signIn: \'Anmelden\', hint: \'Enter zum Senden · Shift+Enter neue Zeile\' },',
'  fr: { placeholder: \'Posez une question...\', newChat: \'Nouveau chat\', getStarted: \'Commencer\', signIn: \'Se connecter\', hint: \'Entrée pour envoyer · Maj+Entrée nouvelle ligne\' },',
'  es: { placeholder: \'Haz una pregunta...\', newChat: \'Nuevo chat\', getStarted: \'Empezar\', signIn: \'Iniciar sesión\', hint: \'Enter para enviar · Shift+Enter nueva línea\' },',
'  ar: { placeholder: \'اسأل أي شيء...\', newChat: \'محادثة جديدة\', getStarted: \'ابدأ\', signIn: \'تسجيل الدخول\', hint: \'Enter للإرسال\' },',
'  ja: { placeholder: \'何でも聞いてください...\', newChat: \'新しいチャット\', getStarted: \'始める\', signIn: \'ログイン\', hint: \'Enterで送信 · Shift+Enterで改行\' },',
'  zh: { placeholder: \'请问任何问题...\', newChat: \'新聊天\', getStarted: \'开始\', signIn: \'登录\', hint: \'Enter发送 · Shift+Enter换行\' },',
'};',
'const LANG_LABELS = { en: \'Ask anything...\', tr: \'Ne sormak istersiniz?\', de: \'Stell eine Frage...\', fr: \'Posez une question...\', es: \'Haz una pregunta...\', ar: \'اسأل أي شيء...\', ja: \'何でも聞いてください...\', zh: \'请问任何问题...\' };',
'',
'',
'let currentLang = localStorage.getItem(\'zyai_lang\') || \'en\';',
'',
'function showLang() { ',
'  document.getElementById(\'lang-modal\').classList.remove(\'hidden\');',
'  document.querySelectorAll(\'.lang-option\').forEach(el => el.classList.remove(\'active\'));',
'  const options = document.querySelectorAll(\'.lang-option\');',
'  const langs = [\'en\',\'tr\',\'de\',\'fr\',\'es\',\'ar\',\'ja\',\'zh\'];',
'  langs.forEach((l, i) => { if (l === currentLang && options[i]) options[i].classList.add(\'active\'); });',
'}',
'',
'function setLang(lang) {',
'  currentLang = lang;',
'  localStorage.setItem(\'zyai_lang\', lang);',
'  document.getElementById(\'lang-modal\').classList.add(\'hidden\');',
'  applyUILang(lang);',
'}',
'',
'function applyUILang(lang) {',
'  var s = UI_STRINGS[lang] || UI_STRINGS.en;',
'  var inp = document.getElementById(\'input\'); if (inp) inp.placeholder = s.placeholder;',
'  var btn = document.querySelector(\'.pill-btn\'); if (btn) btn.textContent = s.newChat;',
'  var hint = document.querySelector(\'.input-hint\'); if (hint) hint.textContent = s.hint + \' · 📎 PDF, Word, Excel, code\';',
'  var sb = document.getElementById(\'onboard-start\'); if (sb) sb.textContent = s.getStarted;',
'  var si = document.getElementById(\'onboard-signin\'); if (si) si.textContent = s.signIn;',
'}',
'',
'',
'// Close lang modal on outside click',
'document.addEventListener(\'click\', function(e) {',
'  const modal = document.getElementById(\'lang-modal\');',
'  if (modal && !modal.classList.contains(\'hidden\') && e.target === modal) {',
'    modal.classList.add(\'hidden\');',
'  }',
'});',
'',
'',
'let apiOpen = false;',
'',
'function toggleAPI() {',
'  apiOpen = !apiOpen;',
'  document.getElementById(\'api-panel\').classList.toggle(\'open\', apiOpen);',
'  document.getElementById(\'sb-api\').classList.toggle(\'active\', apiOpen);',
'}',
'',
'async function getAPIKey() {',
'  const email = document.getElementById(\'api-email\').value.trim();',
'  if (!email) { alert(\'Please enter your email\'); return; }',
'  try {',
'    const res = await fetch(WORKER + \'/api/v1/keys\', {',
'      method: \'POST\',',
'      headers: { \'Content-Type\': \'application/json\' },',
'      body: JSON.stringify({ email })',
'    });',
'    const data = await res.json();',
'    if (data.error) { alert(data.error); return; }',
'    document.getElementById(\'api-key-value\').textContent = data.key;',
'    document.getElementById(\'api-key-box\').classList.add(\'visible\');',
'  } catch(e) {',
'    alert(\'Error: \' + e.message);',
'  }',
'}',
'',
'',
'function openProfile() {',
'  if (!currentUser) return;',
'  document.getElementById(\'profile-modal\').classList.remove(\'hidden\');',
'  document.getElementById(\'profile-avatar-big\').textContent = currentUser.email[0].toUpperCase();',
'  document.getElementById(\'profile-email-text\').textContent = currentUser.email;',
'  showSettingsPanel(\'account\');',
'  loadProfileData();',
'}',
'function closeProfile() { document.getElementById(\'profile-modal\').classList.add(\'hidden\'); }',
'function showSettingsPanel(name) {',
'  document.querySelectorAll(\'.settings-panel\').forEach(function(p) { p.classList.remove(\'active\'); });',
'  document.querySelectorAll(\'.settings-nav-item\').forEach(function(n) { n.classList.remove(\'active\'); });',
'  var p = document.getElementById(\'spanel-\' + name); if (p) p.classList.add(\'active\');',
'  var n = document.getElementById(\'snav-\' + name); if (n) n.classList.add(\'active\');',
'}',
'async function loadProfileData() {',
'  try {',
'    const subRes = await fetch(WORKER + \'/api/subscription\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ user_id: currentUser.id }) });',
'    const subData = await subRes.json();',
'    const res = await fetch(WORKER + \'/api/profile\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ user_id: currentUser.id, email: currentUser.email }) });',
'    const data = { ...await res.json(), ...subData };',
'    document.getElementById(\'profile-joined-text\').textContent = \'Member since \' + (data.joined ? new Date(data.joined).toLocaleDateString() : \'-\');',
'    var e2 = document.getElementById(\'profile-email-text2\'); if (e2) e2.textContent = currentUser.email;',
'    document.getElementById(\'stat-today\').textContent = data.chats_today || 0;',
'    document.getElementById(\'stat-total\').textContent = data.chats_total || 0;',
'    var rem = data.api_remaining !== undefined ? data.api_remaining : 100;',
'    document.getElementById(\'stat-api-remaining\').textContent = rem;',
'    var bar = document.getElementById(\'usage-bar\'); if (bar) bar.style.width = Math.max(0, 100 - rem) + \'%\';',
'    var pb = document.getElementById(\'billing-plan-badge\'); if (pb) pb.textContent = (data.plan || \'free\').charAt(0).toUpperCase() + (data.plan || \'free\').slice(1);',
'    var planEl3 = document.getElementById(\'ua-plan\'); if(planEl3) planEl3.textContent = (data.plan || \'free\').charAt(0).toUpperCase() + (data.plan || \'free\').slice(1);',
'    var pn = document.getElementById(\'billing-plan-name\'); if (pn) pn.textContent = (data.plan || \'free\').charAt(0).toUpperCase() + (data.plan || \'free\').slice(1) + \' Plan\';',
'    var er = document.getElementById(\'billing-expires-row\'); if (er && data.days_remaining) { er.style.display = \'flex\'; document.getElementById(\'billing-expires\').textContent = data.days_remaining + \' days remaining\'; }',
'    const apiContent = document.getElementById(\'profile-api-content\');',
'    if (data.api_key) {',
'      apiContent.innerHTML = \'<div class="profile-api-key">\' + esc(data.api_key) + \'</div><div style="margin-top:4px;"><button class="profile-api-btn" onclick="copyProfileKey()">Copy</button></div>\';',
'      apiContent.dataset.key = data.api_key;',
'    } else {',
'      apiContent.innerHTML = \'<div class="profile-no-api">No API key yet.</div><button class="profile-api-btn" onclick="generateProfileKey()">Generate API Key</button>\';',
'    }',
'  } catch(e) { console.error(\'Profile load error:\', e); }',
'}',
'function copyProfileKey() { var k = document.getElementById(\'profile-api-content\').dataset.key; if (k) navigator.clipboard.writeText(k).then(function() { alert(\'Copied!\'); }); }',
'async function generateProfileKey() {',
'  if (!currentUser) return;',
'  try {',
'    const res = await fetch(WORKER + \'/api/v1/keys\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ email: currentUser.email }) });',
'    const data = await res.json(); if (data.key) loadProfileData();',
'  } catch(e) { alert(\'Error: \' + e.message); }',
'}',
'',
'function copyAPIKey() {',
'  const key = document.getElementById(\'api-key-value\').textContent;',
'  navigator.clipboard.writeText(key).then(function() {',
'    const btn = document.querySelector(\'.api-copy-btn\');',
'    btn.textContent = \'Copied!\';',
'    setTimeout(function() { btn.textContent = \'Copy\'; }, 1500);',
'  });',
'}',
'',
'',
'(function init() {',
'  const saved = localStorage.getItem(\'zyai_user\');',
'  if (saved) { currentUser = JSON.parse(saved); updateUserAvatar(); document.getElementById(\'modal-auth\').classList.add(\'hidden\'); }',
'  else { document.getElementById(\'onboard\').classList.remove(\'hidden\'); }',
'  const model = localStorage.getItem(\'zyai_model\');',
'  if (model) document.getElementById(\'model-select\').value = model;',
'  const theme = localStorage.getItem(\'zyai_theme\') || \'dark\';',
'  document.documentElement.setAttribute(\'data-theme\', theme);',
'  var _t=document.getElementById(\'sb-theme\');if(_t)_t.innerHTML = theme === \'dark\' ? \'<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/></svg>\' : \'<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"/></svg>\';',
'  currentLang = localStorage.getItem(\'zyai_lang\') || \'en\';',
'  applyUILang(currentLang);',
'  if (localStorage.getItem(\'zyai_sidebar\')) { var sb = document.getElementById(\'sidebar\'); if(sb) sb.classList.add(\'expanded\'); }',
'  const inp2 = document.getElementById(\'input\'); if (inp2) inp2.placeholder = LANG_LABELS[currentLang] || LANG_LABELS.en;',
'})();',
'',
'function updateUserAvatar() {',
'  var av = document.getElementById(\'user-avatar\');',
'  var letter = document.getElementById(\'ua-letter\');',
'  var emailEl = document.getElementById(\'ua-email\');',
'  var planEl = document.getElementById(\'ua-plan\');',
'  if (currentUser) {',
'    var l = currentUser.email[0].toUpperCase();',
'    if (letter) letter.textContent = l;',
'    if (emailEl) emailEl.textContent = currentUser.email;',
'    av.title = currentUser.email;',
'  } else {',
'    if (letter) letter.textContent = \'?\';',
'    if (emailEl) emailEl.textContent = \'Guest\';',
'    if (planEl) planEl.textContent = \'Free\';',
'    av.title = \'Account\';',
'  }',
'}',
'',
'function showAvatarMenu(e) {',
'  e.preventDefault();',
'  document.querySelectorAll(".avatar-menu").forEach(function(m) { m.remove(); });',
'  var menu = document.createElement("div");',
'  menu.className = "avatar-menu";',
'  var TG_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'currentColor\'><path d=\'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.41 13.17 4.448 12.27c-.658-.204-.67-.658.136-.975l10.95-4.22c.55-.197 1.03.132.86.975z\'/></svg>";',
'  var DC_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'currentColor\'><path d=\'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\'/></svg>";',
'  var GH_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'currentColor\'><path d=\'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\'/></svg>";',
'  var SET_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><circle cx=\'12\' cy=\'12\' r=\'3\'/><path d=\'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\'/></svg>";',
'  var LANG_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><circle cx=\'12\' cy=\'12\' r=\'10\'/><line x1=\'2\' y1=\'12\' x2=\'22\' y2=\'12\'/><path d=\'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\'/></svg>";',
'  var USE_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'22 12 18 12 15 21 9 3 6 12 2 12\'/></svg>";',
'  var PRI_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/></svg>";',
'  var TER_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\'/><polyline points=\'14 2 14 8 20 8\'/></svg>";',
'  var HLP_SVG = "<svg width=\'25\' height=\'25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><circle cx=\'12\' cy=\'12\' r=\'10\'/><path d=\'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\'/><line x1=\'12\' y1=\'17\' x2=\'12.01\' y2=\'17\'/></svg>";',
'  var items = [',
'    { label: "Account", icon: SET_SVG, action: function() { showUserMenu(); } },',
'    { label: "Privacy", icon: PRI_SVG, href: "/privacy" },',
'    { label: "Capabilities", icon: SET_SVG, action: function() { showUserMenu(); } },',
'    { divider: true },',
'    { label: "Language", icon: LANG_SVG, action: function() { showLang(); } },',
'    { divider: true },',
'    { label: "Telegram", icon: TG_SVG, href: "https://t.me/zyorgbot" },',
'    { label: "Discord", icon: DC_SVG, href: "https://discord.gg/DpPUDUYAXS" },',
'    { label: "GitHub", icon: GH_SVG, href: "https://github.com/b71labs" },',
'    { divider: true },',
'    { label: "Terms", icon: TER_SVG, action: function() { showDisclaimer(); } },',
'    { label: "Help", icon: HLP_SVG, action: function() { showHelp(); } },',
'  ];',
'  items.forEach(function(item) {',
'    if (item.divider) { var d = document.createElement("div"); d.className = "avatar-menu-divider"; menu.appendChild(d); return; }',
'    var el = item.href ? document.createElement("a") : document.createElement("div");',
'    if (item.href) { el.href = item.href; if (!item.href.startsWith("/") && !item.href.startsWith("mailto")) el.target = "_blank"; }',
'    else { el.onclick = (function(fn) { return function() { menu.remove(); fn(); }; })(item.action); }',
'    el.className = "avatar-menu-item";',
'    el.innerHTML = item.icon + "<span>" + esc(item.label) + "</span>";',
'    menu.appendChild(el);',
'  });',
'  var av = document.getElementById("user-avatar");',
'  var rect = av.getBoundingClientRect();',
'  menu.style.left = (rect.right + 8) + "px";',
'  menu.style.bottom = (window.innerHeight - rect.bottom - 8) + "px";',
'  document.body.appendChild(menu);',
'  setTimeout(function() { document.addEventListener("click", function h() { menu.remove(); document.removeEventListener("click", h); }); }, 10);',
'}',
'',
'function showUserMenu() {',
'  if (currentUser) { openProfile(); }',
'  else { document.getElementById(\'modal-auth\').classList.remove(\'hidden\'); }',
'}',
'',
'function showDisclaimer() { document.getElementById(\'modal-disclaimer\').classList.remove(\'hidden\'); }',
'function closeDisclaimer() { document.getElementById(\'modal-disclaimer\').classList.add(\'hidden\'); }',
'',
'function switchTab(tab) {',
'  authTab = tab;',
'  document.getElementById(\'tab-login\').classList.toggle(\'active\', tab === \'login\');',
'  document.getElementById(\'tab-register\').classList.toggle(\'active\', tab === \'register\');',
'  document.getElementById(\'auth-btn\').textContent = tab === \'login\' ? \'Login\' : \'Register\';',
'  document.getElementById(\'auth-err\').textContent = \'\';',
'}',
'',
'async function doAuth() {',
'  const email = document.getElementById(\'auth-email\').value.trim();',
'  const password = document.getElementById(\'auth-password\').value;',
'  const errEl = document.getElementById(\'auth-err\');',
'  if (!email || !password) { errEl.textContent = \'Please fill in all fields\'; return; }',
'  document.getElementById(\'auth-btn\').textContent = \'Please wait...\';',
'  try {',
'    const res = await fetch(WORKER + \'/api/auth\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ action: authTab, email, password }) });',
'    const data = await res.json();',
'    if (data.error) { errEl.textContent = data.error; document.getElementById(\'auth-btn\').textContent = authTab === \'login\' ? \'Login\' : \'Register\'; return; }',
'    currentUser = data.user;',
'    localStorage.setItem(\'zyai_user\', JSON.stringify(currentUser));',
'    document.getElementById(\'modal-auth\').classList.add(\'hidden\');',
'    updateUserAvatar();',
'    if (data.history) loadHistory(data.history);',
'  } catch(e) { errEl.textContent = \'Connection error\'; document.getElementById(\'auth-btn\').textContent = authTab === \'login\' ? \'Login\' : \'Register\'; }',
'}',
'',
'function startGuest() { document.getElementById(\'onboard\').classList.add(\'hidden\'); }',
'function startSignIn() { document.getElementById(\'onboard\').classList.add(\'hidden\'); document.getElementById(\'modal-auth\').classList.remove(\'hidden\'); }',
'',
'function skipAuth() { document.getElementById(\'modal-auth\').classList.add(\'hidden\'); }',
'',
'function logout() {',
'  currentUser = null;',
'  localStorage.removeItem(\'zyai_user\');',
'  updateUserAvatar();',
'  clearChat();',
'}',
'',
'function loadHistory(msgs) {',
'  if (!msgs || !msgs.length) return;',
'  msgs.forEach(function(m) {',
'    history.push({ role: m.role === \'assistant\' ? \'assistant\' : \'user\', content: m.content });',
'    addMsg(m.role === \'assistant\' ? \'ai\' : \'user\', m.content, false);',
'  });',
'}',
'',
'function saveModel() { localStorage.setItem(\'zyai_model\', document.getElementById(\'model-select\').value); }',
'',
'function toggleSidebar() {',
'  var sb = document.getElementById(\'sidebar\');',
'  sb.classList.toggle(\'expanded\');',
'  localStorage.setItem(\'zyai_sidebar\', sb.classList.contains(\'expanded\') ? \'1\' : \'\');',
'}',
'',
'function toggleSidebar() {',
'  var sb = document.getElementById(\'sidebar\');',
'  var exp = sb.classList.toggle(\'expanded\');',
'  localStorage.setItem(\'zyai_sidebar\', exp ? \'1\' : \'\');',
'}',
'function downloadLast() {',
'  var msgs = document.querySelectorAll(\'.bubble-ai\');',
'  if (!msgs.length) { alert(\'No messages to download\'); return; }',
'  var text = Array.from(msgs).map(function(m) { return m.innerText; }).join(\'\\n\\n---\\n\\n\');',
'  var a = document.createElement(\'a\');',
'  a.href = \'data:text/plain;charset=utf-8,\' + encodeURIComponent(text);',
'  a.download = \'zyai-chat-\' + new Date().toISOString().slice(0,10) + \'.txt\';',
'  a.click();',
'}',
'',
'function setTheme(t) {',
'  document.documentElement.setAttribute(\'data-theme\', t);',
'  localStorage.setItem(\'zyai_theme\', t);',
'  var d = document.getElementById(\'theme-btn-dark\'); if(d) d.style.borderColor = t===\'dark\' ? \'var(--green)\' : \'var(--border)\';',
'  var li = document.getElementById(\'theme-btn-light\'); if(li) li.style.borderColor = t===\'light\' ? \'var(--green)\' : \'var(--border)\';',
'}',
'',
'function toggleTheme() {',
'  const html = document.documentElement;',
'  const next = html.getAttribute(\'data-theme\') === \'dark\' ? \'light\' : \'dark\';',
'  html.setAttribute(\'data-theme\', next);',
'  var _t=document.getElementById(\'sb-theme\');if(_t)_t.innerHTML = next === \'dark\' ? \'<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/></svg>\' : \'<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"/></svg>\';',
'  localStorage.setItem(\'zyai_theme\', next);',
'}',
'',
'function clearChat() { history = []; loading = false; attachedFile = null; document.getElementById(\'send-btn\').disabled = false; location.reload(); }',
'function suggest(btn) { document.getElementById(\'input\').value = btn.textContent; send(); }',
'',
'function handleFile(input) {',
'  const file = input.files[0];',
'  if (!file) return;',
'  if (file.size > 2 * 1024 * 1024) { alert(\'File too large. Max 2MB.\'); return; }',
'  const ext = file.name.split(\'.\').pop().toLowerCase();',
'  const binaryExts = [\'pdf\', \'doc\', \'docx\', \'xls\', \'xlsx\'];',
'  const icons = { js: \'JS\', ts: \'TS\', py: \'PY\', sol: \'SOL\', html: \'HTML\', css: \'CSS\', json: \'JSON\', md: \'MD\', rs: \'RS\', pdf: \'PDF\', doc: \'DOC\', docx: \'DOC\', xls: \'XLS\', xlsx: \'XLS\', csv: \'CSV\' };',
'  const reader = new FileReader();',
'  if (binaryExts.includes(ext)) {',
'    reader.onload = function(e) {',
'      const base64 = e.target.result.split(\',\')[1];',
'      attachedFile = { name: file.name, content: null, base64: base64, type: file.type || \'application/octet-stream\', ext: ext };',
'      document.getElementById(\'file-preview-area\').innerHTML = \'<div class="file-preview"><span>\' + (icons[ext] || \'FILE\') + \'</span><span class="file-preview-name">\' + esc(file.name) + \' (\' + Math.round(file.size/1024) + \'KB)</span><button class="file-preview-remove" onclick="removeFile()">x</button></div>\';',
'    };',
'    reader.readAsDataURL(file);',
'  } else {',
'    reader.onload = function(e) {',
'      attachedFile = { name: file.name, content: e.target.result, base64: null, ext: ext };',
'      document.getElementById(\'file-preview-area\').innerHTML = \'<div class="file-preview"><span>\' + (icons[ext] || \'FILE\') + \'</span><span class="file-preview-name">\' + esc(file.name) + \' (\' + Math.round(file.size/1024) + \'KB)</span><button class="file-preview-remove" onclick="removeFile()">x</button></div>\';',
'    };',
'    reader.readAsText(file);',
'  }',
'  input.value = \'\';',
'}',
'',
'function removeFile() { attachedFile = null; document.getElementById(\'file-preview-area\').innerHTML = \'\'; }',
'',
'const inp = document.getElementById(\'input\');',
'inp.addEventListener(\'keydown\', function(e) { if (e.key === \'Enter\' && !e.shiftKey) { e.preventDefault(); send(); } });',
'inp.addEventListener(\'input\', function() { this.style.height = \'auto\'; this.style.height = Math.min(this.scrollHeight, 140) + \'px\'; });',
'',
'function extractCode(text) {',
'  const htmlMatch = text.match(/\\u0060\\u0060\\u0060html\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i);',
'  if (htmlMatch) return { type: \'html\', code: htmlMatch[1].trim() };',
'  const jsMatch = text.match(/\\u0060\\u0060\\u0060javascript\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i) || text.match(/\\u0060\\u0060\\u0060js\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i);',
'  if (jsMatch) return { type: \'js\', code: jsMatch[1].trim() };',
'  return null;',
'}',
'',
'function openPreview(code) {',
'  currentCode = code;',
'  document.getElementById(\'preview-panel\').classList.add(\'open\');',
'  ',
'  switchPreview(previewMode);',
'}',
'',
'function closePreview() {',
'  document.getElementById(\'preview-panel\').classList.remove(\'open\');',
'  ',
'}',
'',
'function switchPreview(mode) {',
'  previewMode = mode;',
'  document.getElementById(\'ptab-preview\').classList.toggle(\'active\', mode === \'preview\');',
'  document.getElementById(\'ptab-code\').classList.toggle(\'active\', mode === \'code\');',
'  const content = document.getElementById(\'preview-content\');',
'  if (mode === \'preview\') {',
'    content.innerHTML = \'<iframe class="preview-iframe" id="preview-frame"></iframe>\';',
'    const frame = document.getElementById(\'preview-frame\');',
'    const doc = frame.contentDocument || frame.contentWindow.document;',
'    doc.open(); doc.write(currentCode); doc.close();',
'  } else {',
'    content.innerHTML = \'<div class="preview-code">\' + esc(currentCode) + \'</div>\';',
'  }',
'}',
'',
'function renderMarkdown(text) {',
'  return text',
'    .replace(/&/g,\'&amp;\').replace(/</g,\'&lt;\').replace(/>/g,\'&gt;\')',
'    .replace(/\\u0060\\u0060\\u0060(\\w*)\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/g, function(_, lang, code) { return \'<pre><code>\' + code.trim() + \'</code></pre>\'; })',
'    .replace(/\\u0060([^\\u0060]+)\\u0060/g, \'<code>$1</code>\')',
'    .replace(/\\*\\*([^*]+)\\*\\*/g, \'<strong>$1</strong>\')',
'    .replace(/\\*([^*]+)\\*/g, \'<em>$1</em>\')',
'    .replace(/\\[([^\\]]+)\\]\\((https?:\\/\\/[^)]+)\\)/g, \'<a href="$2" target="_blank">$1</a>\')',
'    .replace(/^#{1,3} (.+)$/gm, \'<strong>$1</strong>\')',
'    .replace(/^- (.+)$/gm, \'• $1\')',
'    .replace(/\\n/g, \'<br>\');',
'}',
'',
'function addMsg(role, text, isLoading) {',
'  const empty = document.getElementById(\'empty\');',
'  if (empty) empty.remove();',
'  const msgs = document.getElementById(\'messages\');',
'  const div = document.createElement(\'div\');',
'  div.className = \'msg msg-\' + role;',
'  const label = role === \'user\' ? \'you\' : \'<span class="dot"></span> AI\';',
'  var lw = document.createElement(\'div\'); lw.className = \'bubble-loading-wrap\';',
'  var li = document.createElement(\'img\'); li.className = \'bubble-loading-logo\'; li.src = \'https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png\';',
'  var ld = document.createElement(\'div\'); ld.className = \'bubble-loading-dots\'; ld.innerHTML = \'<span></span><span></span><span></span>\';',
'  lw.appendChild(li); lw.appendChild(ld);',
'  var loadingHtml = lw.outerHTML;',
'  const content = isLoading ? loadingHtml : (role === \'ai\' ? renderMarkdown(text) : esc(text));',
'  div.innerHTML = \'<div class="msg-meta">\' + label + \'</div><div class="bubble bubble-\' + role + (isLoading ? \' loading\' : \'\') + \'">\' + content + \'</div>\';',
'  msgs.appendChild(div);',
'  msgs.scrollTop = msgs.scrollHeight;',
'  return div.querySelector(\'.bubble\');',
'}',
'',
'function copyMsg(btn) {',
'  const bubble = btn.closest(\'.msg\').querySelector(\'.bubble\');',
'  navigator.clipboard.writeText(bubble.innerText).then(function() { btn.textContent = \'copied!\'; setTimeout(function() { btn.textContent = \'copy\'; }, 1500); });',
'}',
'',
'async function send() {',
'  if (loading) return;',
'  const q = inp.value.trim();',
'  if (!q && !attachedFile) return;',
'  inp.value = \'\'; inp.style.height = \'auto\';',
'  loading = true;',
'  document.getElementById(\'send-btn\').disabled = true;',
'  let userContent = q;',
'  let fileData = null;',
'  if (attachedFile) {',
'    if (attachedFile.base64) {',
'      fileData = { name: attachedFile.name, content: null, base64: attachedFile.base64, type: attachedFile.type, ext: attachedFile.ext };',
'    } else {',
'      fileData = { name: attachedFile.name, content: attachedFile.content ? attachedFile.content.slice(0, 50000) : \'\', ext: attachedFile.ext };',
'    }',
'    if (!q) userContent = \'Please analyze this file: \' + attachedFile.name;',
'    removeFile();',
'  }',
'  addMsg(\'user\', userContent + (fileData ? \' [file: \' + fileData.name + \']\' : \'\'));',
'  history.push({ role: \'user\', content: userContent });',
'  const bubble = addMsg(\'ai\', \'\', true);',
'  const model = document.getElementById(\'model-select\').value;',
'  try {',
'    const res = await fetch(WORKER + \'/api/chat\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ messages: history, model, user_id: currentUser ? currentUser.id : null, file: fileData }) });',
'    const data = await res.json();',
'    const answer = data.answer || data.error || \'No response\';',
'    bubble.classList.remove(\'loading\');',
'    bubble.innerHTML = renderMarkdown(answer);',
'    if (data.image) { var img = document.createElement(\"img\"); img.src = data.image; img.style.cssText = \"max-width:100%;border-radius:8px;margin-top:8px;display:block;\"; bubble.appendChild(img); }',
'    history.push({ role: \'assistant\', content: answer });',
'    const extracted = extractCode(answer);',
'    const actions = document.createElement(\'div\');',
'    actions.className = \'msg-actions\';',
'    let btns = \'<button class="action-btn" onclick="copyMsg(this)">copy</button>\';',
'    if (extracted && extracted.type === \'html\') { btns += \'<button class="action-btn preview-btn" onclick="openPreview(\' + JSON.stringify(extracted.code) + \')">preview</button>\'; openPreview(extracted.code); }',
'    actions.innerHTML = btns;',
'    bubble.closest(\'.msg\').appendChild(actions);',
'',
'  } catch(e) { bubble.classList.remove(\'loading\'); bubble.textContent = \'Error: \' + e.message; }',
'  loading = false;',
'  document.getElementById(\'send-btn\').disabled = false;',
'  document.getElementById(\'messages\').scrollTop = 99999;',
'}',
'',
'function showHelp() { document.getElementById(\'help-modal\').classList.remove(\'hidden\'); }',
'function closeHelp() { document.getElementById(\'help-modal\').classList.add(\'hidden\'); }',
'function toggleHelpForm() {',
'  document.getElementById(\'help-form\').classList.toggle(\'open\');',
'}',
'function submitHelp() {',
'  var email = document.getElementById(\'help-email\').value.trim();',
'  var subject = document.getElementById(\'help-subject\').value.trim();',
'  var message = document.getElementById(\'help-message\').value.trim();',
'  if (!email || !message) { alert(\'Please fill in email and message\'); return; }',
'  var mailto = \'mailto:contact@zyai.org?subject=\' + encodeURIComponent(subject || \'ZyAI Support\') + \'&body=\' + encodeURIComponent(\'From: \' + email + \'\\n\\n\' + message);',
'  window.open(mailto);',
'  document.getElementById(\'help-sent\').classList.add(\'show\');',
'  document.getElementById(\'help-email\').value = \'\';',
'  document.getElementById(\'help-subject\').value = \'\';',
'  document.getElementById(\'help-message\').value = \'\';',
'}',
'',
'',
'function esc(s) { return String(s).replace(/&/g,\'&amp;\').replace(/</g,\'&lt;\').replace(/>/g,\'&gt;\').replace(/"/g,\'&quot;\'); }',
'</script>',
'</body>',
'</html>',
''
].join("\n");

'// PBKDF2 ile güçlü şifre hashleme (100k iterasyon + salt)',
'async function hashPassword(password) {',
'  const enc = new TextEncoder();',
'  const salt = crypto.getRandomValues(new Uint8Array(16));',
'  const keyMat = await crypto.subtle.importKey(\'raw\', enc.encode(password), \'PBKDF2\', false, [\'deriveBits\']);',
'  const bits = await crypto.subtle.deriveBits({ name: \'PBKDF2\', salt, iterations: 100000, hash: \'SHA-256\' }, keyMat, 256);',
'  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2,\'0\')).join(\'\');',
'  const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2,\'0\')).join(\'\');',
'  return \'pbkdf2:\' + saltHex + \':\' + hashHex;',
'}',
'',
'// Şifre doğrulama (PBKDF2 + legacy SHA-256 fallback)',
'async function verifyPassword(password, stored) {',
'  const enc = new TextEncoder();',
'  // Yeni PBKDF2 format: pbkdf2:SALT:HASH',
'  if (stored.startsWith(\'pbkdf2:\')) {',
'    const parts = stored.split(\':\');',
'    if (parts.length !== 3) return false;',
'    const saltBytes = new Uint8Array(parts[1].match(/.{2}/g).map(b => parseInt(b, 16)));',
'    const keyMat = await crypto.subtle.importKey(\'raw\', enc.encode(password), \'PBKDF2\', false, [\'deriveBits\']);',
'    const bits = await crypto.subtle.deriveBits({ name: \'PBKDF2\', salt: saltBytes, iterations: 100000, hash: \'SHA-256\' }, keyMat, 256);',
'    const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2,\'0\')).join(\'\');',
'    return hashHex === parts[2];',
'  }',
'  // Legacy SHA-256 fallback (eski kullanıcılar)',
'  const data = enc.encode(password);',
'  const hashBuf = await crypto.subtle.digest(\'SHA-256\', data);',
'  const legacyHash = Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2,\'0\')).join(\'\');',
'  if (legacyHash === stored) {',
'    // Legacy hash bulundu - bir sonraki login\'de PBKDF2\'ye yükselt (çağıran tarafta)',
'    return \'legacy\';',
'  }',
'  return false;',
'}',
'',
async function analyzeContract(address) {
  try {
    const rpcUrl = 'https://mainnet.base.org';
    const [codeRes, balRes] = await Promise.all([
      fetch(rpcUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getCode', params: [address, 'latest'], id: 1 }) }),
      fetch(rpcUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getBalance', params: [address, 'latest'], id: 2 }) })
    ]);
    const codeData = await codeRes.json();
    const balData = await balRes.json();
    const code = codeData.result;
    if (!code || code === '0x') return { error: 'Not a contract or empty' };
    const balEth = parseInt(balData.result, 16) / 1e18;
    return { address, hasCode: true, codeSize: (code.length - 2) / 2 + ' bytes', balance: balEth.toFixed(6) + ' ETH', network: 'Base Mainnet' };
  } catch(e) { return { error: 'AI service error' }; }
}

async function runAI(model, messages, env) {
  // Try Cloudflare AI first
  try {
    const ai = await env.AI.run(model, { messages, max_tokens: 2048 });
    const msg = ai.choices && ai.choices[0] && ai.choices[0].message;
    const answer = ai.response || (msg && msg.content) || (msg && msg.reasoning_content) || '';
    if (answer && !answer.includes('neuron')) return { answer, provider: 'cloudflare' };
  } catch(e) {
    if (!e.message.includes('neuron') && !e.message.includes('4006') && !e.message.includes('limit')) {
      throw e;
    }
  }

  // Fallback to Groq
  if (env.GROQ_KEY) {
    const groqModel = model.includes('llama-3.2') ? 'llama-3.2-3b-preview' : 'llama-3.3-70b-versatile';
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.GROQ_KEY },
      body: JSON.stringify({ model: groqModel, messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'groq' };
    }
  }

  // Fallback to OpenRouter
  if (env.OPENROUTER_KEY) {
    const orModel = 'meta-llama/llama-3.3-70b-instruct:free';
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.OPENROUTER_KEY, 'HTTP-Referer': 'https://zyai.org', 'X-Title': 'ZyAI' },
      body: JSON.stringify({ model: orModel, messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'openrouter' };
    }
  }

  // Fallback to Mistral
  if (env.MISTRAL_KEY) {
    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.MISTRAL_KEY },
      body: JSON.stringify({ model: 'mistral-small-latest', messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'mistral' };
    }
  }

  throw new Error('All AI providers unavailable');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(HTML, { headers: { ...cors, 'Content-Type': 'text/html;charset=UTF-8' } });
    }


    // PRIVACY POLICY
    if (url.pathname === '/privacy') {
      const privacyHtml = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<title>Privacy Policy - ZyAI</title>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n<link rel="icon" type="image/png" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">\n<style>\n  :root { --bg:#1c1c1e; --surface:#2c2c2e; --border:#3a3a3c; --text:#f5f5f7; --text2:#98989d; --green:#4ade80; --muted:#636366; }\n  [data-theme="light"] { --bg:#fafafa; --surface:#fff; --border:#e8e8e8; --text:#111; --text2:#666; --green:#16a34a; --muted:#bbb; }\n  * { margin:0; padding:0; box-sizing:border-box; }\n  body { background:var(--bg); color:var(--text); font-family:\'Inter\',-apple-system,sans-serif; line-height:1.7; transition:background 0.2s,color 0.2s; }\n  .container { max-width:780px; margin:0 auto; padding:2rem 1.5rem 4rem; }\n  .topbar { display:flex; align-items:center; justify-content:space-between; margin-bottom:3rem; padding-bottom:1rem; border-bottom:1px solid var(--border); }\n  .logo { display:flex; align-items:center; gap:8px; text-decoration:none; color:var(--text); font-weight:800; font-size:16px; letter-spacing:-0.03em; }\n  .logo img { width:28px; height:28px; border-radius:6px; }\n  .logo em { font-style:normal; color:var(--green); }\n  .theme-btn { background:none; border:1px solid var(--border); color:var(--text2); font-size:14px; width:32px; height:32px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.15s; }\n  .theme-btn:hover { border-color:var(--green); color:var(--green); }\n  .hero { margin-bottom:2.5rem; }\n  .hero-label { font-size:12px; font-weight:600; color:var(--green); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.75rem; }\n  .hero-title { font-size:32px; font-weight:800; letter-spacing:-0.04em; line-height:1.2; margin-bottom:0.75rem; }\n  .hero-meta { font-size:13px; color:var(--muted); }\n  .toc { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:1.25rem 1.5rem; margin-bottom:2.5rem; }\n  .toc-title { font-size:12px; font-weight:600; color:var(--text2); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.75rem; }\n  .toc-list { list-style:none; display:flex; flex-direction:column; gap:4px; }\n  .toc-list a { font-size:13px; color:var(--text2); text-decoration:none; transition:color 0.15s; display:flex; align-items:center; gap:6px; }\n  .toc-list a:hover { color:var(--green); }\n  .toc-list a::before { content:\'\'; width:4px; height:4px; border-radius:50%; background:var(--muted); flex-shrink:0; }\n  .section { margin-bottom:2.5rem; padding-top:0.5rem; }\n  .section-num { font-size:11px; font-weight:700; color:var(--green); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.4rem; }\n  h2 { font-size:18px; font-weight:700; letter-spacing:-0.02em; margin-bottom:1rem; }\n  p { font-size:14px; color:var(--text2); margin-bottom:0.75rem; line-height:1.8; }\n  ul, ol { padding-left:1.25rem; margin-bottom:0.75rem; }\n  li { font-size:14px; color:var(--text2); margin-bottom:0.4rem; line-height:1.7; }\n  .highlight { background:var(--surface); border:1px solid var(--border); border-left:3px solid var(--green); border-radius:0 10px 10px 0; padding:12px 16px; margin:1rem 0; }\n  .highlight p { margin:0; font-size:13px; }\n  .badge { display:inline-flex; align-items:center; gap:5px; background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:3px 10px; font-size:11px; color:var(--text2); margin:2px; }\n  .badge.green { border-color:#2d4a35; background:#1c2e22; color:var(--green); }\n  .badge.red { border-color:#5a2020; background:#2d1515; color:#f87171; }\n  a { color:var(--green); text-decoration:none; }\n  a:hover { text-decoration:underline; }\n  .divider { height:1px; background:var(--border); margin:2rem 0; }\n  .footer { text-align:center; font-size:12px; color:var(--muted); padding-top:2rem; border-top:1px solid var(--border); }\n</style>\n</head>\n<body>\n<div class="container">\n  <div class="topbar">\n    <a href="/" class="logo">\n      <img src="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png" alt="ZyAI"/>\n      Zy<em>AI</em>\n    </a>\n    <button class="theme-btn" id="theme-btn" onclick="toggleTheme()">&#9788;</button>\n  </div>\n\n  <div class="hero">\n    <div class="hero-label">Legal</div>\n    <div class="hero-title">Privacy Policy</div>\n    <div class="hero-meta">Last updated: June 29, 2026 &nbsp;·&nbsp; Effective immediately</div>\n  </div>\n\n  <div class="toc">\n    <div class="toc-title">Table of Contents</div>\n    <ul class="toc-list">\n      <li><a href="#s1">Information We Collect</a></li>\n      <li><a href="#s2">How We Use Your Information</a></li>\n      <li><a href="#s3">Data Storage & Security</a></li>\n      <li><a href="#s4">Third-Party Services</a></li>\n      <li><a href="#s5">Chrome Extension</a></li>\n      <li><a href="#s6">Your Rights</a></li>\n      <li><a href="#s7">Cookies & Tracking</a></li>\n      <li><a href="#s8">Data Retention</a></li>\n      <li><a href="#s9">Children\'s Privacy</a></li>\n      <li><a href="#s10">Changes to This Policy</a></li>\n      <li><a href="#s11">Contact Us</a></li>\n    </ul>\n  </div>\n\n  <div class="highlight">\n    <p><strong>Short version:</strong> We collect only what we need to run ZyAI. We never sell your data. We never share it with advertisers. Your conversations are yours.</p>\n  </div>\n\n  <div class="section" id="s1">\n    <div class="section-num">01</div>\n    <h2>Information We Collect</h2>\n    <p>We collect information in the following categories:</p>\n    <p><strong>Account Information</strong></p>\n    <ul>\n      <li>Email address (required to create an account)</li>\n      <li>Password — stored only as a SHA-256 hash, never in plain text</li>\n      <li>Account creation date</li>\n    </ul>\n    <p><strong>Usage Data</strong></p>\n    <ul>\n      <li>Chat messages you send to ZyAI (stored only if you are logged in)</li>\n      <li>Number of chats today and total (for rate limiting and your stats)</li>\n      <li>API request counts (for rate limiting)</li>\n    </ul>\n    <p><strong>Payment Data</strong></p>\n    <ul>\n      <li>Blockchain transaction hashes you submit for subscription verification</li>\n      <li>We do <strong>not</strong> collect credit card numbers, wallet private keys, or any sensitive financial data</li>\n    </ul>\n    <p><strong>Files You Upload</strong></p>\n    <ul>\n      <li>Files you attach to chat (PDF, Word, Excel, code, etc.) are processed in memory to answer your question</li>\n      <li>File contents are <strong>not permanently stored</strong> — they exist only for the duration of the API call</li>\n    </ul>\n    <p><strong>What We Do NOT Collect</strong></p>\n    <div>\n      <span class="badge red">✗ IP addresses</span>\n      <span class="badge red">✗ Browser fingerprints</span>\n      <span class="badge red">✗ Location data</span>\n      <span class="badge red">✗ Device identifiers</span>\n      <span class="badge red">✗ Advertising IDs</span>\n      <span class="badge red">✗ Browsing history</span>\n    </div>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s2">\n    <div class="section-num">02</div>\n    <h2>How We Use Your Information</h2>\n    <p>We use the information we collect exclusively to:</p>\n    <ul>\n      <li>Authenticate you and keep your account secure</li>\n      <li>Save and restore your chat history across sessions (logged-in users only)</li>\n      <li>Enforce fair-use rate limits on chat and API usage</li>\n      <li>Verify subscription payments via on-chain transaction data</li>\n      <li>Display your usage statistics in your account dashboard</li>\n      <li>Respond to support requests you send us</li>\n    </ul>\n    <div class="highlight">\n      <p>We do <strong>not</strong> use your data to train AI models, build advertising profiles, or share information with third-party marketers.</p>\n    </div>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s3">\n    <div class="section-num">03</div>\n    <h2>Data Storage & Security</h2>\n    <p>All user data is stored in <strong>Cloudflare D1</strong> — a serverless SQLite database operated by Cloudflare, Inc. on infrastructure distributed globally.</p>\n    <ul>\n      <li>Passwords are hashed with SHA-256 before storage — we cannot recover your password</li>\n      <li>API keys are randomly generated 48-character hex strings prefixed with <code>zyai_</code></li>\n      <li>All traffic between your browser and ZyAI is encrypted via HTTPS/TLS</li>\n      <li>We do not operate our own servers — ZyAI runs entirely on Cloudflare Workers edge infrastructure</li>\n    </ul>\n    <p>While we implement strong security practices, no system is 100% immune to breaches. In the unlikely event of a data breach affecting your account, we will notify you via email within 72 hours of discovery.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s4">\n    <div class="section-num">04</div>\n    <h2>Third-Party Services</h2>\n    <p>ZyAI routes your questions through AI providers to generate responses. Your message content may be processed by:</p>\n    <ul>\n      <li><strong>Cloudflare Workers AI</strong> — primary AI inference (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank">Privacy Policy</a>)</li>\n      <li><strong>Groq</strong> — fallback AI provider (<a href="https://groq.com/privacy-policy/" target="_blank">Privacy Policy</a>)</li>\n      <li><strong>OpenRouter</strong> — secondary fallback (<a href="https://openrouter.ai/privacy" target="_blank">Privacy Policy</a>)</li>\n      <li><strong>Mistral AI</strong> — tertiary fallback (<a href="https://mistral.ai/privacy/" target="_blank">Privacy Policy</a>)</li>\n      <li><strong>DeFiLlama</strong> — real-time DeFi data (no personal data shared) (<a href="https://defillama.com/privacy" target="_blank">Privacy Policy</a>)</li>\n    </ul>\n    <p>We do not pass your account email, name, or any identifying information to AI providers. Only your message text and attached file content are forwarded.</p>\n    <p>We also use <strong>Google Fonts</strong> to load the Inter typeface. Google may log your IP address when fonts are served. You can review <a href="https://policies.google.com/privacy" target="_blank">Google\'s Privacy Policy</a> for details.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s5">\n    <div class="section-num">05</div>\n    <h2>Chrome Extension</h2>\n    <p>The ZyAI Chrome Extension is designed with privacy as a default:</p>\n    <ul>\n      <li><span class="badge green">✓</span> Does <strong>not</strong> read or collect your browsing history</li>\n      <li><span class="badge green">✓</span> Does <strong>not</strong> track which websites you visit</li>\n      <li><span class="badge green">✓</span> Only sends text you <strong>explicitly select and submit</strong> to ZyAI</li>\n      <li><span class="badge green">✓</span> Stores only your theme preference locally in your browser via <code>localStorage</code></li>\n      <li><span class="badge green">✓</span> Does <strong>not</strong> share any data with third parties beyond what the main ZyAI service uses</li>\n      <li><span class="badge green">✓</span> Requests only the minimum permissions required to function</li>\n    </ul>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s6">\n    <div class="section-num">06</div>\n    <h2>Your Rights</h2>\n    <p>You have the following rights regarding your personal data:</p>\n    <ul>\n      <li><strong>Access:</strong> You can view your account email, join date, and usage statistics in your account dashboard at any time.</li>\n      <li><strong>Deletion:</strong> You may request deletion of your account and all associated data by emailing <a href="mailto:privacy@zyai.org">privacy@zyai.org</a>. We will process your request within 30 days.</li>\n      <li><strong>Portability:</strong> You may request an export of your chat history and account data in JSON format.</li>\n      <li><strong>Correction:</strong> If your data is inaccurate, you may request a correction by contacting us.</li>\n      <li><strong>Opt-out:</strong> You may use ZyAI without creating an account. Guest usage does not store any personal data.</li>\n    </ul>\n    <p>If you are located in the European Economic Area (EEA), United Kingdom, or California, you may have additional rights under GDPR, UK GDPR, or CCPA respectively. Contact us at <a href="mailto:privacy@zyai.org">privacy@zyai.org</a> to exercise any of these rights.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s7">\n    <div class="section-num">07</div>\n    <h2>Cookies & Tracking</h2>\n    <p>ZyAI does <strong>not</strong> use cookies.</p>\n    <p>We use <code>localStorage</code> in your browser to remember:</p>\n    <ul>\n      <li>Your theme preference (dark/light)</li>\n      <li>Your selected language</li>\n      <li>Your preferred AI model</li>\n      <li>Your login session (stored as JSON, never transmitted to third parties)</li>\n    </ul>\n    <p>This data lives only in your browser and is never sent to our servers except as part of normal API authentication. You can clear it at any time by clearing your browser\'s site data for zyai.org.</p>\n    <p>We do <strong>not</strong> use analytics trackers, pixel tags, or third-party tracking scripts.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s8">\n    <div class="section-num">08</div>\n    <h2>Data Retention</h2>\n    <ul>\n      <li><strong>Chat history:</strong> Retained as long as your account is active. Deleted upon account deletion request.</li>\n      <li><strong>Account data:</strong> Retained until you request deletion.</li>\n      <li><strong>API keys:</strong> Retained until you request deletion or regeneration.</li>\n      <li><strong>Subscription records:</strong> Retained for 3 years for accounting and fraud prevention purposes.</li>\n      <li><strong>File uploads:</strong> Not retained — processed in memory only.</li>\n    </ul>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s9">\n    <div class="section-num">09</div>\n    <h2>Children\'s Privacy</h2>\n    <p>ZyAI is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal data, we will delete it immediately. If you believe a child has provided us with their information, please contact us at <a href="mailto:privacy@zyai.org">privacy@zyai.org</a>.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s10">\n    <div class="section-num">10</div>\n    <h2>Changes to This Policy</h2>\n    <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:</p>\n    <ul>\n      <li>Update the "Last updated" date at the top of this page</li>\n      <li>Post the revised policy at zyai.org/privacy</li>\n      <li>Where required by law, notify registered users by email</li>\n    </ul>\n    <p>Your continued use of ZyAI after a policy update constitutes your acceptance of the revised terms. We encourage you to review this page periodically.</p>\n  </div>\n\n  <div class="divider"></div>\n\n  <div class="section" id="s11">\n    <div class="section-num">11</div>\n    <h2>Contact Us</h2>\n    <p>For privacy-related questions, requests, or concerns:</p>\n    <ul>\n      <li>Email: <a href="mailto:privacy@zyai.org">privacy@zyai.org</a></li>\n      <li>General support: <a href="mailto:contact@zyai.org">contact@zyai.org</a></li>\n      <li>Response time: within 72 hours on business days</li>\n    </ul>\n    <p>We are committed to resolving privacy concerns promptly and transparently.</p>\n  </div>\n\n  <div class="footer">\n    &copy; 2026 ZyAI &nbsp;·&nbsp; <a href="/">zyai.org</a> &nbsp;·&nbsp; All rights reserved\n  </div>\n</div>\n<script>\n  (function() {\n    var theme = localStorage.getItem(\'zyai_theme\') || \'dark\';\n    document.documentElement.setAttribute(\'data-theme\', theme);\n    document.getElementById(\'theme-btn\').textContent = theme === \'dark\' ? \'\\u2600\' : \'\\u263e\';\n  })();\n  function toggleTheme() {\n    var html = document.documentElement;\n    var next = html.getAttribute(\'data-theme\') === \'dark\' ? \'light\' : \'dark\';\n    html.setAttribute(\'data-theme\', next);\n    document.getElementById(\'theme-btn\').textContent = next === \'dark\' ? \'\\u2600\' : \'\\u263e\';\n    localStorage.setItem(\'zyai_theme\', next);\n  }\n</script>\n</body>\n</html>';
      return new Response(privacyHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Access-Control-Allow-Origin': '*' } });
    }

    if (url.pathname === '/api/auth' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { action, email, password } = body;
        if (!email || !password) return new Response(JSON.stringify({ error: 'Email and password required' }), { status: 400, headers: cors });
        const hash = await hashPassword(password);
        if (action === 'register') {
          if (password.length < 8) return new Response(JSON.stringify({ error: 'Password must be at least 8 characters' }), { status: 400, headers: cors });
          if (!/[A-Z]/.test(password)) return new Response(JSON.stringify({ error: 'Password must contain at least one uppercase letter' }), { status: 400, headers: cors });
          if (!/[0-9]/.test(password)) return new Response(JSON.stringify({ error: 'Password must contain at least one number' }), { status: 400, headers: cors });
          if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return new Response(JSON.stringify({ error: 'Invalid email format' }), { status: 400, headers: cors });
          try {
            await env.DB.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').bind(email, hash).run();
            const user = await env.DB.prepare('SELECT id, email FROM users WHERE email = ?').bind(email).first();
            return new Response(JSON.stringify({ user }), { headers: { ...cors, 'Content-Type': 'application/json' } });
          } catch(e) { return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400, headers: cors }); }
        }
        if (action === 'login') {
          const loginKey = 'login:' + email;
          const attempts = await env.DB.prepare('SELECT COUNT(*) as c FROM chats WHERE user_id = 0 AND role = ? AND content = ? AND created_at > datetime("now","-5 minutes")').bind('login_fail', email).first().catch(()=>({c:0}));
          if (attempts && attempts.c >= 5) return new Response(JSON.stringify({ error: 'Too many failed attempts. Try again in 5 minutes.' }), { status: 429, headers: cors });
          const userRow = await env.DB.prepare('SELECT id, email, password_hash FROM users WHERE email = ?').bind(email).first();
          if (!userRow) return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401, headers: cors });
          const verifyResult = await verifyPassword(password, userRow.password_hash);
          if (!verifyResult) return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401, headers: cors });
          // Legacy SHA-256 → PBKDF2 otomatik yükseltme
          if (verifyResult === 'legacy') {
            const newHash = await hashPassword(password);
            await env.DB.prepare('UPDATE users SET password_hash = ? WHERE id = ?').bind(newHash, userRow.id).run();
          }
          const user = { id: userRow.id, email: userRow.email };
          if (!user) return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401, headers: cors });
          const chats = await env.DB.prepare('SELECT role, content FROM chats WHERE user_id = ? ORDER BY created_at DESC LIMIT 20').bind(user.id).all();
          return new Response(JSON.stringify({ user, history: chats.results.reverse() }), { headers: { ...cors, 'Content-Type': 'application/json' } });
        }
        return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400, headers: cors });
      } catch(e) { return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors }); }
    }


    // SEARCH
    if (url.pathname === '/api/search' && request.method === 'POST') {
      try {
        const body = await request.json();
        if (!body.user_id) return new Response(JSON.stringify({ error: 'Authentication required' }), { status: 401, headers: cors });
        const query = body.query || '';
        let rows;
        try {
          const ftsQuery = query.split(' ').filter(Boolean).slice(0, 6).map(function(w) { return w + '*'; }).join(' ');
          rows = await env.DB.prepare(
            'SELECT k.title, k.content, k.url, k.source_type FROM knowledge k INNER JOIN knowledge_fts f ON k.id = f.rowid WHERE knowledge_fts MATCH ? ORDER BY rank LIMIT 10'
          ).bind(ftsQuery).all();
        } catch(e) {
          rows = await env.DB.prepare(
            'SELECT title, content, url, source_type FROM knowledge WHERE content LIKE ? OR title LIKE ? LIMIT 10'
          ).bind('%' + query + '%', '%' + query + '%').all();
        }
        return new Response(JSON.stringify({ results: rows.results }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }





    // INDEX KNOWLEDGE TO R2
    if (url.pathname === '/api/index-knowledge' && request.method === 'POST') {
      try {
        if (url.searchParams.get('secret') !== env.PIPELINE_SECRET) {
          return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: cors });
        }
        if (!env.ASSETS) {
          return new Response(JSON.stringify({ error: 'R2 ASSETS binding not found' }), { status: 500, headers: cors });
        }
        const offset = parseInt(url.searchParams.get('offset') || '0');
        const rows = await env.DB.prepare(
          'SELECT id, title, content, url, source_type FROM knowledge ORDER BY id ASC LIMIT 50 OFFSET ?'
        ).bind(offset).all();
        let indexed = 0;
        for (const row of rows.results) {
          try {
            const fileName = 'knowledge/' + row.id + '.txt';
            const fileContent = (row.title || '') + '\n\n' + (row.content || '').slice(0, 3000);
            await env.ASSETS.put(fileName, fileContent, { httpMetadata: { contentType: 'text/plain' } });
            indexed++;
          } catch(e) {}
        }
        return new Response(JSON.stringify({ indexed, total: rows.results.length, offset, next_offset: offset + 50, has_more: rows.results.length === 50 }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // AI SEARCH QUERY
    if (url.pathname === '/api/ai-search' && request.method === 'POST') {
      try {
        const body = await request.json();
        if (!body.user_id) return new Response(JSON.stringify({ error: 'Authentication required' }), { status: 401, headers: cors });
        const { query } = body;
        if (!query) return new Response(JSON.stringify({ error: 'query required' }), { status: 400, headers: cors });

        if (!env.AI_SEARCH) {
          return new Response(JSON.stringify({ error: 'AI_SEARCH not configured' }), { status: 500, headers: cors });
        }

        const results = await env.AI_SEARCH.search(query);
        return new Response(JSON.stringify({ results }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }


    // DEFI DATA - DeFiLlama API
    if (url.pathname === '/api/defi' && request.method === 'POST') {
      try {
        const body = await request.json();
        if (!body.user_id) return new Response(JSON.stringify({ error: 'Authentication required' }), { status: 401, headers: cors });
        const { type, query } = body;

        if (type === 'yields') {
          // Get yield pools - filter by query (protocol or chain)
          const res = await fetch('https://yields.llama.fi/pools');
          if (!res.ok) throw new Error('DeFiLlama API failed');
          const data = await res.json();
          let pools = data.data || [];

          // Filter by query
          if (query) {
            const q = query.toLowerCase();
            pools = pools.filter(p =>
              (p.project && p.project.toLowerCase().includes(q)) ||
              (p.symbol && p.symbol.toLowerCase().includes(q)) ||
              (p.chain && p.chain.toLowerCase().includes(q))
            );
          }

          // Sort by APY and take top 10
          pools = pools
            .filter(p => p.apy && p.apy > 0 && p.tvlUsd > 100000)
            .sort((a, b) => b.apy - a.apy)
            .slice(0, 10)
            .map(p => ({
              protocol: p.project,
              symbol: p.symbol,
              chain: p.chain,
              apy: Math.round(p.apy * 100) / 100,
              tvl: Math.round(p.tvlUsd / 1000000 * 10) / 10 + 'M',
              url: p.poolMeta || ''
            }));

          return new Response(JSON.stringify({ pools }), { headers: { ...cors, 'Content-Type': 'application/json' } });
        }

        if (type === 'protocol') {
          // Get protocol TVL info
          const res = await fetch('https://api.llama.fi/protocols');
          if (!res.ok) throw new Error('DeFiLlama API failed');
          const data = await res.json();
          let protocols = data;

          if (query) {
            const q = query.toLowerCase();
            protocols = protocols.filter(p =>
              p.name && p.name.toLowerCase().includes(q)
            ).slice(0, 5).map(p => ({
              name: p.name,
              tvl: p.tvl ? (p.tvl / 1000000).toFixed(1) + 'M' : '-',
              chain: p.chain,
              category: p.category,
              change_1d: p.change_1d ? p.change_1d.toFixed(2) + '%' : '-'
            }));
          }

          return new Response(JSON.stringify({ protocols }), { headers: { ...cors, 'Content-Type': 'application/json' } });
        }

        if (type === 'hacks') {
          // Get recent hacks
          const res = await fetch('https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/helper/portedTokens.json');
          const hacksRes = await fetch('https://hackedbysame.org/api/hacks?limit=10');
          // Fallback to DeFiLlama hack data
          const hackRes = await fetch('https://defi-hacks-api.vercel.app/api');
          if (hackRes.ok) {
            const hacks = await hackRes.json();
            return new Response(JSON.stringify({ hacks: hacks.slice(0, 10) }), { headers: { ...cors, 'Content-Type': 'application/json' } });
          }
          throw new Error('Hack data unavailable');
        }

        return new Response(JSON.stringify({ error: 'Invalid type. Use: yields, protocol, hacks' }), { status: 400, headers: cors });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // SUBSCRIPTION VERIFY
    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { user_id, tx_hash, chain, plan } = body;
        if (!user_id || !tx_hash || !chain || !plan) {
          return new Response(JSON.stringify({ error: 'user_id, tx_hash, chain, plan required' }), { status: 400, headers: cors });
        }

        const TREASURY = '0x9651E0CE4FbBc29C6915424c10A9B32FB995748D';
        const PLAN_PRICES = { pro: '9000000', developer: '19000000' }; // USDC 6 decimals
        const USDC_CONTRACTS = {
          base: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
          optimism: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
          arbitrum: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          hyperevm: '0x0000000000000000000000000000000000000000',
        };
        const RPC_URLS = {
          base: 'https://mainnet.base.org',
          optimism: 'https://mainnet.optimism.io',
          arbitrum: 'https://arb1.arbitrum.io/rpc',
          hyperevm: 'https://rpc.hyperliquid.xyz/evm',
        };

        const rpcUrl = RPC_URLS[chain];
        if (!rpcUrl) return new Response(JSON.stringify({ error: 'Unsupported chain' }), { status: 400, headers: cors });

        // Get transaction receipt
        const receiptRes = await fetch(rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getTransactionReceipt', params: [tx_hash], id: 1 })
        });
        const receiptData = await receiptRes.json();
        const receipt = receiptData.result;

        if (!receipt) return new Response(JSON.stringify({ error: 'Transaction not found. Please wait for confirmation.' }), { status: 400, headers: cors });
        if (receipt.status !== '0x1') return new Response(JSON.stringify({ error: 'Transaction failed' }), { status: 400, headers: cors });

        // Check if tx already used
        const existing = await env.DB.prepare('SELECT id FROM subscriptions WHERE tx_hash = ?').bind(tx_hash).first();
        if (existing) return new Response(JSON.stringify({ error: 'Transaction already used' }), { status: 400, headers: cors });

        // Verify USDC transfer in logs
        const usdcContract = USDC_CONTRACTS[chain].toLowerCase();
        const transferTopic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
        const treasuryPadded = '0x000000000000000000000000' + TREASURY.slice(2).toLowerCase();
        const expectedAmount = PLAN_PRICES[plan];

        let verified = false;
        if (chain === 'hyperevm') {
          // HyperEVM native payment check
          const txRes = await fetch(rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getTransactionByHash', params: [tx_hash], id: 1 })
          });
          const txData = await txRes.json();
          const tx = txData.result;
          if (tx && tx.to && tx.to.toLowerCase() === TREASURY.toLowerCase()) {
            verified = true;
          }
        } else {
          for (const log of receipt.logs || []) {
            if (
              log.address && log.address.toLowerCase() === usdcContract &&
              log.topics && log.topics[0] === transferTopic &&
              log.topics[2] && log.topics[2].toLowerCase() === treasuryPadded
            ) {
              const amount = parseInt(log.data, 16).toString();
              if (parseInt(amount) >= parseInt(expectedAmount)) {
                verified = true;
                break;
              }
            }
          }
        }

        if (!verified) return new Response(JSON.stringify({ error: 'Payment not verified. Make sure you sent USDC to the correct address on ' + chain }), { status: 400, headers: cors });

        // Activate subscription - 30 days
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        await env.DB.prepare(
          'INSERT OR REPLACE INTO subscriptions (user_id, plan, tx_hash, expires_at) VALUES (?, ?, ?, ?)'
        ).bind(user_id, plan, tx_hash, expiresAt).run();

        // Update API key limit if exists
        const user = await env.DB.prepare('SELECT email FROM users WHERE id = ?').bind(user_id).first();
        if (user) {
          await env.DB.prepare('UPDATE api_keys SET requests_today = 0 WHERE email = ?').bind(user.email).run();
        }

        return new Response(JSON.stringify({
          success: true,
          plan,
          expires_at: expiresAt,
          message: plan.charAt(0).toUpperCase() + plan.slice(1) + ' plan activated successfully!'
        }), { headers: { ...cors, 'Content-Type': 'application/json' } });

      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // GET SUBSCRIPTION STATUS
    if (url.pathname === '/api/subscription' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { user_id } = body;
        if (!user_id) return new Response(JSON.stringify({ error: 'user_id required' }), { status: 400, headers: cors });

        const sub = await env.DB.prepare(
          'SELECT plan, expires_at FROM subscriptions WHERE user_id = ? ORDER BY id DESC LIMIT 1'
        ).bind(user_id).first();

        if (!sub || new Date(sub.expires_at) < new Date()) {
          return new Response(JSON.stringify({ plan: 'free', active: false }), { headers: { ...cors, 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({
          plan: sub.plan,
          active: true,
          expires_at: sub.expires_at,
          days_remaining: Math.ceil((new Date(sub.expires_at) - new Date()) / (1000 * 60 * 60 * 24))
        }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // PROFILE
    if (url.pathname === '/api/profile' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { user_id, email } = body;
        if (!user_id) return new Response(JSON.stringify({ error: 'user_id required' }), { status: 400, headers: cors });

        const user = await env.DB.prepare('SELECT id, email, created_at FROM users WHERE id = ?').bind(user_id).first();
        if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404, headers: cors });

        const today = new Date().toISOString().split('T')[0];
        const chatsTotal = await env.DB.prepare('SELECT COUNT(*) as count FROM chats WHERE user_id = ? AND role = "user"').bind(user_id).first();
        const chatsToday = await env.DB.prepare('SELECT COUNT(*) as count FROM chats WHERE user_id = ? AND role = "user" AND created_at >= ?').bind(user_id, today).first();
        const apiKey = await env.DB.prepare('SELECT key, requests_today, last_reset FROM api_keys WHERE email = ?').bind(user.email).first();

        let apiRemaining = null;
        if (apiKey) {
          const lastReset = apiKey.last_reset ? apiKey.last_reset.split('T')[0] : today;
          const requestsToday = lastReset !== today ? 0 : (apiKey.requests_today || 0);
          apiRemaining = 100 - requestsToday;
        }

        return new Response(JSON.stringify({
          email: user.email,
          joined: user.created_at,
          chats_total: chatsTotal.count || 0,
          chats_today: chatsToday.count || 0,
          api_key: apiKey ? apiKey.key : null,
          api_remaining: apiRemaining,
        }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // API KEY GENERATION
    if (url.pathname === '/api/v1/keys' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { email } = body;
        if (!email) return new Response(JSON.stringify({ error: 'Email required' }), { status: 400, headers: cors });

        // Check if key exists
        const keyUser = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
        if (!keyUser) return new Response(JSON.stringify({ error: 'Register first' }), { status: 403, headers: cors });
        const existing = await env.DB.prepare('SELECT key FROM api_keys WHERE email = ?').bind(email).first();
        if (existing) return new Response(JSON.stringify({ key: existing.key, email }), { headers: { ...cors, 'Content-Type': 'application/json' } });

        // Generate new key
        const randomBytes = new Uint8Array(24);
        crypto.getRandomValues(randomBytes);
        const key = 'zyai_' + Array.from(randomBytes).map(b => b.toString(16).padStart(2, '0')).join('');

        await env.DB.prepare('INSERT INTO api_keys (email, key) VALUES (?, ?)').bind(email, key).run();
        return new Response(JSON.stringify({ key, email, message: 'API key created successfully' }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // API v1 - Authenticate
    async function authenticateAPI(req) {
      const auth = req.headers.get('Authorization') || '';
      const key = auth.replace('Bearer ', '').trim();
      if (!key || !key.startsWith('zyai_')) return null;
      const record = await env.DB.prepare('SELECT * FROM api_keys WHERE key = ?').bind(key).first();
      return record || null;
    }

    // API v1 - Status
    if (url.pathname === '/api/v1/status' && request.method === 'GET') {
      const statusAuth = await authenticateAPI(request); if (!statusAuth) return new Response(JSON.stringify({ error: 'API key required' }), { status: 401, headers: cors });
      const total = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge').first();
      return new Response(JSON.stringify({
        status: 'ok',
        version: '1.0',
        knowledge_entries: total.total,
        endpoints: {
          'POST /api/v1/chat': 'Ask a question',
          'GET /api/v1/search?q=query': 'Search knowledge base',
          'POST /api/v1/keys': 'Generate API key',
        }
      }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    // API v1 - Chat
    if (url.pathname === '/api/v1/chat' && request.method === 'POST') {
      try {
        const apiUser = await authenticateAPI(request);
        if (!apiUser) return new Response(JSON.stringify({ error: 'Invalid or missing API key. Get one at zyai.org' }), { status: 401, headers: cors });

        const body = await request.json();
        const question = body.question || body.message || '';
        if (!question) return new Response(JSON.stringify({ error: 'question field required' }), { status: 400, headers: cors });

        // Rate limit: 100 requests per day
        const today = new Date().toISOString().split('T')[0];
        const lastReset = apiUser.last_reset ? apiUser.last_reset.split('T')[0] : today;
        let requestsToday = apiUser.requests_today || 0;
        if (lastReset !== today) {
          requestsToday = 0;
          await env.DB.prepare('UPDATE api_keys SET requests_today = 0, last_reset = datetime("now") WHERE key = ?').bind(apiUser.key).run();
        }
        if (requestsToday >= 100) return new Response(JSON.stringify({ error: 'Daily limit reached (100 requests/day). Upgrade at zyai.org' }), { status: 429, headers: cors });

        // Search knowledge
        let context = '';
        // Try AI Search first for semantic search
        if (env.AI_SEARCH) {
          try {
            const aiResults = await env.AI_SEARCH.search({ query: question, ai_search_options: { max_num_results: 5 } });
            if (aiResults && aiResults.chunks && aiResults.chunks.length > 0) {
              context = aiResults.chunks.map(function(c) { return (c.item && c.item.key ? c.item.key : '') + ':\n' + (c.text || '').slice(0, 400); }).join('\n\n');
            }
          } catch(e) {}
        }
        // Fallback to FTS if AI Search returns nothing
        if (!context) {
          let rows;
          try {
            const ftsQuery = question.split(' ').filter(Boolean).slice(0, 6).map(function(w) { return w + '*'; }).join(' ');
            rows = await env.DB.prepare('SELECT k.title, k.content, k.url FROM knowledge k INNER JOIN knowledge_fts f ON k.id = f.rowid WHERE knowledge_fts MATCH ? ORDER BY rank LIMIT 5').bind(ftsQuery).all();
          } catch(e) {
            rows = await env.DB.prepare('SELECT title, content, url FROM knowledge WHERE content LIKE ? OR title LIKE ? LIMIT 5').bind('%' + question + '%', '%' + question + '%').all();
          }
          context = rows.results.map(function(r) { return r.title + ': ' + r.content.slice(0, 400); }).join('\n\n');
        }
        const systemPrompt = 'You are ZyAI, a security-focused developer AI assistant. Answer clearly and technically.\n\n' + (context ? 'Knowledge Base:\n' + context : '');

        const aiMessages = [{ role: 'system', content: systemPrompt }, { role: 'user', content: question }];

        // Run AI with fallback
        let answer = '';
        try {
          const ai = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', { messages: aiMessages, max_tokens: 1024 });
          const msg = ai.choices && ai.choices[0] && ai.choices[0].message;
          answer = ai.response || (msg && msg.content) || '';
          if (answer.includes('neuron') || answer.includes('4006')) answer = '';
        } catch(e) {}

        if (!answer && env.GROQ_KEY) {
          const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.GROQ_KEY },
            body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: aiMessages, max_tokens: 1024 }),
          });
          if (res.ok) { const d = await res.json(); answer = d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content || ''; }
        }

        if (!answer && env.MISTRAL_KEY) {
          const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.MISTRAL_KEY },
            body: JSON.stringify({ model: 'mistral-small-latest', messages: aiMessages, max_tokens: 1024 }),
          });
          if (res.ok) { const d = await res.json(); answer = d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content || ''; }
        }

        // Update request count
        await env.DB.prepare('UPDATE api_keys SET requests_today = requests_today + 1 WHERE key = ?').bind(apiUser.key).run();

        return new Response(JSON.stringify({
          answer,
          sources: rows.results.map(function(r) { return { title: r.title, url: r.url }; }),
          requests_remaining: 100 - (requestsToday + 1),
        }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    // API v1 - Search
    if (url.pathname === '/api/v1/search' && request.method === 'GET') {
      try {
        const apiUser = await authenticateAPI(request);
        if (!apiUser) return new Response(JSON.stringify({ error: 'Invalid or missing API key' }), { status: 401, headers: cors });

        const q = url.searchParams.get('q') || '';
        if (!q) return new Response(JSON.stringify({ error: 'q parameter required' }), { status: 400, headers: cors });

        let rows;
        try {
          const ftsQuery = q.split(' ').filter(Boolean).slice(0, 6).map(function(w) { return w + '*'; }).join(' ');
          rows = await env.DB.prepare('SELECT k.title, k.content, k.url, k.source_type FROM knowledge k INNER JOIN knowledge_fts f ON k.id = f.rowid WHERE knowledge_fts MATCH ? ORDER BY rank LIMIT 10').bind(ftsQuery).all();
        } catch(e) {
          rows = await env.DB.prepare('SELECT title, content, url, source_type FROM knowledge WHERE content LIKE ? OR title LIKE ? LIMIT 10').bind('%' + q + '%', '%' + q + '%').all();
        }

        return new Response(JSON.stringify({
          query: q,
          results: rows.results.map(function(r) { return { title: r.title, url: r.url, category: r.source_type, excerpt: r.content.slice(0, 200) }; }),
          count: rows.results.length,
        }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
      }
    }

    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const body = await request.json();
        const messages = body.messages || [];
        const model = body.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
        const user_id = body.user_id || null;
        const file = body.file || null;
        const lastMsg = messages[messages.length - 1];
        const question = lastMsg ? lastMsg.content : '';

        // Auto-detect image generation request
        const imageKeywords = ['draw', 'generate image', 'create image', 'make image', 'resim çiz', 'görsel üret', 'resim yap', 'illustrate', 'paint', 'render image', 'picture of', 'image of', 'photo of'];
        const isImageRequest = imageKeywords.some(k => question.toLowerCase().includes(k));
        if (isImageRequest) {
          try {
            const prompt = question.replace(/draw|generate image|create image|make image|resim çiz|görsel üret|resim yap|illustrate|paint|render image|picture of|image of|photo of/gi, '').trim() || question;
            const imgResult = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', { prompt: prompt, num_steps: 20 });
            // imgResult is ArrayBuffer
            const arr = new Uint8Array(imgResult);
            let binary = '';
            for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i]);
            const b64 = btoa(binary);
            return new Response(JSON.stringify({
              answer: 'Here is your generated image:',
              image: 'data:image/png;base64,' + b64,
              sources: [],
              provider: 'stable-diffusion'
            }), { headers: { ...cors, 'Content-Type': 'application/json' } });
          } catch(e) {
            return new Response(JSON.stringify({
              answer: 'Image generation temporarily unavailable',
              sources: [],
              provider: 'error'
            }), { headers: { ...cors, 'Content-Type': 'application/json' } });
          }
        }

        // Auto-fetch DeFi data for relevant questions
        let defiContext = '';
        const defiKeywords = ['yield', 'apy', 'tvl', 'pool', 'liquidity', 'lending', 'borrow', 'protocol', 'defi', 'moonwell', 'aave', 'uniswap', 'compound', 'morpho', 'curve', 'maker'];
        const isDefiQuestion = defiKeywords.some(k => question.toLowerCase().includes(k));
        if (isDefiQuestion) {
          try {
            // Extract protocol name if mentioned
            const protocols = ['moonwell', 'aave', 'uniswap', 'compound', 'morpho', 'curve', 'maker', 'yearn', 'balancer'];
            const mentionedProtocol = protocols.find(p => question.toLowerCase().includes(p));
            const defiRes = await fetch('https://yields.llama.fi/pools');
            if (defiRes.ok) {
              const defiData = await defiRes.json();
              let pools = (defiData.data || []);
              if (mentionedProtocol) {
                pools = pools.filter(p => p.project && p.project.toLowerCase().includes(mentionedProtocol));
              } else {
                pools = pools.filter(p => p.chain && p.chain.toLowerCase() === 'base');
              }
              pools = pools
                .filter(p => p.apy > 0 && p.apy < 500 && p.tvlUsd > 500000)
                .sort((a, b) => b.apy - a.apy)
                .slice(0, 8);
              if (pools.length > 0) {
                defiContext = 'Real-time DeFi Data (DeFiLlama):\n' +
                  pools.map(p => p.project + ' ' + p.symbol + ' on ' + p.chain + ': APY ' + Math.round(p.apy * 10) / 10 + '%, TVL $' + Math.round(p.tvlUsd / 1000000 * 10) / 10 + 'M').join('\n') + '\n\n';
              }
            }
          } catch(e) {}
        }

        // Live crypto + fiat prices
        let priceContext = '';
        const priceKW = ['dolar','dollar','euro','pound','sterlin','bitcoin','btc','eth','ethereum','price','fiyat','kur','rate','usd','eur','gbp','try','coin','crypto','solana','sol','bnb','xrp'];
        if (priceKW.some(k => question.toLowerCase().includes(k))) {
          try {
            const cr = await fetch('https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22ETHUSDT%22,%22SOLUSDT%22,%22BNBUSDT%22,%22XRPUSDT%22]');
            if (cr.ok) {
              const cp = await cr.json();
              priceContext += 'Live Crypto Prices (Binance):\n';
              cp.forEach(function(t) { priceContext += t.symbol.replace('USDT','') + ': $' + parseFloat(t.price).toFixed(2) + '\n'; });
            }
          } catch(e) {}
          try {
            const fr = await fetch('https://open.er-api.com/v6/latest/USD');
            if (fr.ok) {
              const fx = await fr.json();
              if (fx.rates) {
                priceContext += 'Live Exchange Rates (USD):\n';
                priceContext += 'USD/TRY: ' + (fx.rates.TRY||0).toFixed(2) + '\n';
                priceContext += 'USD/EUR: ' + (fx.rates.EUR||0).toFixed(4) + '\n';
                priceContext += 'USD/GBP: ' + (fx.rates.GBP||0).toFixed(4) + '\n';
                priceContext += 'USD/JPY: ' + (fx.rates.JPY||0).toFixed(2) + '\n';
                priceContext += 'USD/CHF: ' + (fx.rates.CHF||0).toFixed(4) + '\n';
              }
            }
          } catch(e) {}
        }

        // Live news via NewsData.io
        let newsContext = '';
        const newsKW = ['haber','news','son dakika','breaking','gündem','latest','today','bugün','dün','yesterday','olay','gelişme'];
        if (newsKW.some(k => question.toLowerCase().includes(k)) && env.NEWSDATA_KEY) {
          try {
            const lang = question.match(/[\u00c0-\u024f\u0130\u0131]/i) ? 'tr' : 'en';
            const nr = await fetch('https://newsdata.io/api/1/latest?apikey=' + env.NEWSDATA_KEY + '&language=' + lang + '&size=5');
            if (nr.ok) {
              const nd = await nr.json();
              if (nd.results && nd.results.length > 0) {
                newsContext += 'Latest News (' + new Date().toUTCString() + '):\n';
                nd.results.forEach(function(a) {
                  newsContext += '- ' + a.title + (a.source_name ? ' [' + a.source_name + ']' : '') + '\n';
                });
              }
            }
          } catch(e) {}
        }

        const addressMatch = question.match(/0x[a-fA-F0-9]{40}/);
        let onchainData = null;
        if (addressMatch) onchainData = await analyzeContract(addressMatch[0]);

        let sources = [];
        let rows;
        try {
          const ftsQuery = question.split(' ').filter(Boolean).slice(0, 8).map(function(w) { return w + '*'; }).join(' ');
          rows = await env.DB.prepare(
            'SELECT k.title, k.content, k.url FROM knowledge k INNER JOIN knowledge_fts f ON k.id = f.rowid WHERE knowledge_fts MATCH ? ORDER BY rank LIMIT 6'
          ).bind(ftsQuery).all();
        } catch(e) {
          rows = await env.DB.prepare('SELECT title, content, url FROM knowledge WHERE content LIKE ? OR title LIKE ? LIMIT 6').bind('%' + question + '%', '%' + question + '%').all();
        }

        sources = rows.results.map(function(r) { return { title: r.title, url: r.url }; });
        const context = rows.results.map(function(r) { return r.title + ': ' + r.content.slice(0, 500); }).join('\n\n');
        const onchainContext = onchainData && !onchainData.error ? 'Onchain Data: ' + JSON.stringify(onchainData) + '\n\n' : '';
        let fileContext = '';
        if (file) {
          if (file.base64 && file.ext) {
            // PDF / Word / Excel - base64
            const binaryNote = {
              pdf: 'PDF document',
              doc: 'Word document', docx: 'Word document',
              xls: 'Excel spreadsheet', xlsx: 'Excel spreadsheet'
            }[file.ext] || 'binary file';
            fileContext = 'User attached a ' + binaryNote + ' named "' + file.name + '". ' +
              'The file is provided as base64. Please analyze it and answer the user question about it. ' +
              'Base64 data (first 20000 chars): ' + file.base64.slice(0, 20000) + '\n\n';
          } else if (file.content) {
            fileContext = 'User attached file "' + file.name + '":\n' + file.content.slice(0, 8000) + '\n\n';
          }
        }

        const systemPrompt = 'You are a smart, helpful AI assistant. You adapt to the user naturally:\n' +
          '- If someone greets you or makes small talk, respond warmly and naturally\n' +
          '- If someone asks a technical question, go deep and be precise\n' +
          '- Match the language of the user (Turkish or English)\n' +
          '- When asked to build something, provide complete working HTML/CSS/JS in a single file inside \u0060\u0060\u0060html code blocks\n' +
          '- When analyzing code or files, be thorough: find bugs, security issues, improvements\n' +
          '- For security topics, be technical and cite specific CVEs or patterns when relevant\n' +
          '- Never be robotic or overly formal - be like a knowledgeable friend\n' +
          '- CRITICAL: Always respond ONLY in the same language the user wrote in. Never mix languages.\n\n' +
          fileContext + priceContext + newsContext + defiContext + onchainContext + (context ? 'Knowledge Base:\n' + context : '');

        const lang = body.lang || 'en';
        const langInstructions = { en: 'Always respond in English.', tr: 'Her zaman Türkçe yanıt ver.', de: 'Antworte immer auf Deutsch.', fr: 'Toujours répondre en français.', es: 'Responde siempre en español.', ar: 'أجب دائماً باللغة العربية.', ja: '常に日本語で回答してください。', zh: '始终用中文回答。' };
        const langInstruction = langInstructions[lang] || 'Always respond in the same language as the user.';
        const aiMessages = [{ role: 'system', content: systemPrompt }].concat(messages.slice(-10));
        const result = await runAI(model, aiMessages, env);
        const answer = result.answer;

        if (user_id) {
          const userMsg = messages[messages.length - 1];
          if (userMsg) await env.DB.prepare('INSERT INTO chats (user_id, role, content) VALUES (?, ?, ?)').bind(user_id, 'user', userMsg.content).run();
          await env.DB.prepare('INSERT INTO chats (user_id, role, content) VALUES (?, ?, ?)').bind(user_id, 'assistant', answer).run();
        }

        return new Response(JSON.stringify({ answer, sources, onchain: onchainData, provider: result.provider }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) { return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors }); }
    }

    return new Response('not found', { status: 404, headers: cors });
  }
};

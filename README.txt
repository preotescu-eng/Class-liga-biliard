CLASS LOUNGE – LIGA DE BILIARD / NETLIFY ONLY

Ce conține:
- index.html = aplicația de administrare
- clasament.html = pagina publică read-only
- netlify/functions/publish.mjs = publică datele în Netlify Blobs
- netlify/functions/standings.mjs = livrează datele publice
- PWA manifest + service worker = instalare ca iconiță pe Android

SETARE NETLIFY
1. Publică proiectul prin Netlify cu build/deploy care procesează Functions și package.json.
2. În Netlify: Project configuration > Environment variables.
3. Creează variabila PUBLISH_KEY cu o parolă/cheie numai de tine știută.
4. Redeploy.
5. Deschide pagina principală și folosește aplicația.
6. Când vrei să publici situația, apasă „Update clasament online” și introdu PUBLISH_KEY.
7. Linkul public este permanent: https://NUMELE-SITE-ULUI.netlify.app/clasament
8. Pe Android, deschide pagina principală în Chrome și alege Install app / Add to Home screen.

IMPORTANT
- Datele de lucru din aplicația de administrare rămân local în browser.
- Doar la apăsarea „Update clasament online” se copiază situația în Netlify Blobs.
- Pagina /clasament este doar pentru citire și afișează ultima publicare.

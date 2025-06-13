# Luna AI

Virtuální AI modelka postavená na Next.js, OpenAI GPT-4 a Stripe.

## Funkce
- Chat s AI modelkou Lunou
- Platby přes Stripe pro nákup kreditů
- Autentizace přes GitHub

## Jak nasadit na Vercel
1. Nahrát repozitář na GitHub
2. Připojit k [https://vercel.com](https://vercel.com)
3. Přidat environment proměnné:
   - `OPENAI_API_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXTAUTH_SECRET`
   - `GITHUB_ID`
   - `GITHUB_SECRET`
4. Deploy a hotovo 🎉

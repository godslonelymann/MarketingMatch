# MarketingMatch

**MarketingMatch** is a full-stack matchmaking platform designed to connect customers with marketing agencies based on specific needs, preferences, and business attributes.

## 🔥 Features

- Role-based Authentication (Customer & Agency)
- Smart Matchmaking Quiz
- Dynamic Agency Recommendations
- One-time Agency Onboarding
- Supabase Integration for Database & Auth
- Fully Responsive UI with Next.js & Tailwind CSS

---

## 📁 Project Structure

```
src/
├── app/
│   ├── Login/                # Login Page
│   ├── Signup/               # Signup Page
│   ├── SelectRole/          # Role selection after signup
│   ├── Agency/Onboarding/    # One-time agency onboarding form
│   ├── Result/               # Matched agency results page
│   ├── FindYourAgency/       # Quiz to find matching agencies
│   
├── components/
│   └── Navbar.jsx            # Responsive top navigation bar
├── data/
│   └── questions.js          # Questions used for matchmaking
├── lib/
│   └── supabaseClient.js     # Supabase client setup
```

---

## 🧠 Pages and Logic

### `Login` / `Signup`
- Common Supabase authentication.
- After signup → redirected to `/SelectRole` page.
- Role is stored in the `profiles` table.

### `select-role`
- Shown **once** post-signup.
- Saves user role in Supabase.
- Redirects:
  - If `Customer` → `/FindYourAgency`
  - If `Agency` → `/Agency/Onboarding`

### `FindYourAgency`
- Quiz-based form
- Records answers & encodes them to pass via URL
- Redirects to `/Result`

### `Result`
- Fetches all agencies from Supabase
- Scores them based on answer-tag overlap
- Renders:
  - Top 3 matches
  - Other potential matches

### `Agency/Onboarding`
- Agency fills in:
  - Name, location, domain
  - Strengths, tags, testimonial
- Data is saved in `agencies` table
- Only shown once per agency

---

## 🧾 Supabase Tables

### `profiles`
Stores user role information.
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  role TEXT
);
```

### `agencies`
Stores agency onboarding data.
```sql
CREATE TABLE agencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id),
  name TEXT,
  description TEXT,
  location TEXT,
  domain TEXT,
  tags TEXT[],
  strengths TEXT[],
  testimonial TEXT
);
```

---

## 🚪 Logout Example
```js
await supabase.auth.signOut();
router.push("/");  # Redirect to Home Page.
```

---

## 🛠 Tech Stack

- **Frontend:** Next.js 13 App Router + Tailwind CSS
- **Backend:** Supabase (Auth + DB)
- **State Management:** useState, useEffect

---


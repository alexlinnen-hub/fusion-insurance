# Fusion Insurance Demo Website

A mock Fusion Insurance website for sales demos, with a working My Account login and policy dashboard.

## How to get this live on GitHub Pages

### Step 1 — Create a new repository
1. Go to https://github.com and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it `fusion-insurance`
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload the files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL the files and folders from this zip:
   - `index.html`
   - `account.html`
   - `css/style.css`
   - `js/data.js`
3. Scroll down, add a commit message like "Initial site upload"
4. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main** and folder to **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/fusion-insurance`

### Step 4 — Add a custom domain (optional)
1. Buy a domain (e.g. fusioninsurance.co.uk) from GoDaddy or Namecheap
2. In GitHub Pages settings, enter your custom domain
3. At your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
4. Tick **Enforce HTTPS**

### Step 5 — Add Talkdesk webchat
Once you have the Talkdesk webchat embed snippet:
1. Open `index.html` and `account.html` in any text editor
2. Paste the snippet just before the `</body>` tag in both files
3. Commit and push — the chat will appear on the live site

---

## Test accounts

| Name           | Policy  | PIN  |
|----------------|---------|------|
| Matt Jones     | FN00123 | 1234 |
| Chris Mosley   | FN00456 | 5678 |
| Chris Jones    | FN00789 | 9012 |
| Steve Donovan  | FN01012 | 3456 |
| Richard Cooper | FN01345 | 7890 |
| Sam Kelly      | FN01678 | 2345 |

**Test phone number: 0161 871 5582**

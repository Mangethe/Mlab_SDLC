import pandas as pd
import json

# Read the second sheet ("LetterBoxd Users")
df = pd.read_excel("Case Study_LetterBoxd.xlsx", sheet_name="LetterBoxd Users", header=1)
print("✅ Excel file loaded successfully")
print("Columns found:", df.columns.tolist())

# Clean column names (remove spaces, dots, special chars)
df.columns = df.columns.str.replace(' ', '_').str.replace("\\.", "", regex=True)


# Map your columns to the JSON structure we need
# We only keep relevant fields and rename to match our frontend
df = df.rename(columns={
    'User_ID': 'id',
    'Sub_Tier': 'tier',
    'Watchlist_Size': 'watchlist',
    'Social_Connections': 'social',
    'Avg_Session_(Min)': 'session',
    'Churn_Risk': 'churn',
    'Primary_Device': 'device',
    'Preferred_Genre': 'genre',
    'Account_Age_(Mo)': 'accountAge',
    'Movies_Watched': 'moviesWatched',
    'Avg_Reviews/Mo': 'reviewsPerMo'
})

# Select and order columns
df = df[[
    'id', 'tier', 'watchlist', 'social', 'session', 'churn',
    'device', 'genre', 'accountAge', 'moviesWatched', 'reviewsPerMo'
]]

# Convert to list of dicts
users_list = df.to_dict(orient='records')

# Save as JSON
with open('data/users.json', 'w') as f:
    json.dump({'users': users_list}, f, indent=2)

print("✅ Converted to data/users.json")
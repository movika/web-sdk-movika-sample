# An example of using the movika web sdk

### [Movika Documentation](https://docs.movika.com/en/sdk/web/get-started)

1. Go to the root of the desired project (**vanillajs-app** или **react-app**).
2. Get the necessary **keys/tokens**:
   - npm token
   - api key
   - app name
3. **Assign** appropriate keys/tokens to variables (without **' < '** and **' > '**):
   - `.npmrc` file needs `_authToken=<npm token>`
   - `src/index.js` file needs `API_KEY='<api key>'`
   - `src/index.js` file needs `APP_NAME='<app name>'`
4. Run `npm install` command
5. In the `src/index.js` file, the `SOURCE` variable must be **assigned a link to the media file or to the manifest** `SOURCE='<manifest or media file>'`
6. Run `npm run start` command
7. Ready!

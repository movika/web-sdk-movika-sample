# Пример использования movika web sdk

### [Документация Movika](https://docs.movika.com/en/sdk/web/get-started)

1. Перейти в корень нужного проекта (**vanillajs-app** или **react-app**).
2. Получить необходимые **ключи/токены**:
   - npm token
   - api key
   - app name
3. **Присвоить** переменным соответствующие **ключи/токены** (без **' < '** и **' > '**):
   - В файле `.npmrc` нужно `_authToken=<npm token>`
   - В файле `src/index.js` нужно `API_KEY='<api key>'`
   - В файле `src/index.js` нужно `APP_NAME='<app name>'`
4. Выполнить команду `npm install`
5. В файле `src/index.js` переменной `SOURCE` нужно **присвоить ссылку на медиафайл или на манифест** `SOURCE='<manifest or media file>'`
6. Выполнить команду `npm run start`
7. Готово!

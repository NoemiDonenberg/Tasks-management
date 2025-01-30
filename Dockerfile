# הגדרת תמונת הבסיס
FROM node:16

# הגדרת תיקיית העבודה בתוך הקונטיינר
WORKDIR /app

# העתקת קבצי package.json ו- package-lock.json
COPY package*.json ./

# התקנת התלויות
RUN npm install

# העתקת שאר הקבצים
COPY . .

# בניית האפליקציה
RUN npm run build

# חשיפת הפורט שבו האפליקציה תרוץ
EXPOSE 3000

# הרצת האפליקציה
CMD ["npm", "start"]

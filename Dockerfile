# Устанавливаем официальный образ Node.js
FROM node:20-alpine

# Создаем директорию приложения
WORKDIR /app

# Копируем зависимости
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь исходный код
COPY . .

# Собираем приложение
RUN yarn build

# Указываем порт, на котором приложение будет работать
EXPOSE 3000

# Команда запуска
CMD ["yarn", "start"]

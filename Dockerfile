# Use the official Nginx image as a base
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend project files to Nginx's public folder
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]

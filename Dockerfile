# Step 1: Base image
FROM python:3.12-slim

# Step 2: Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Step 3: Set working directory
WORKDIR /app

# Step 4: Copy and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Step 5: Copy project files
COPY . .

# Step 6: Expose port
EXPOSE 3000

# Step 7: Run app
CMD ["python", "main.py"]

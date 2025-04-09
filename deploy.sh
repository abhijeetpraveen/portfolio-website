#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

# Store the commit message
commit_message="$1"

# Git operations
echo "Adding files to git..."
git add .

echo "Committing changes with message: $commit_message"
git commit -m "$commit_message"

echo "Pushing to main branch..."
git push origin main

# Vercel deployment
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment process completed!" 
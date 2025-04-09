#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./deploy.sh \"Your commit message\" [file1 file2 ...]"
    exit 1
fi

# Store the commit message
commit_message="$1"

# Shift to get the remaining arguments (files)
shift

# Git operations
echo "Adding files to git..."
if [ $# -eq 0 ]; then
    # If no files specified, add all changes
    git add .
else
    # Add specified files
    git add "$@"
fi

echo "Committing changes with message: $commit_message"
git commit -m "$commit_message"

echo "Pushing to main branch..."
git push origin main

# Vercel deployment
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment process completed!" 
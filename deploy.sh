#!/bin/bash

# Initialize variables
commit_message=""
files=()

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -m|--message)
            commit_message="$2"
            shift 2
            ;;
        -f|--files)
            shift
            while [[ $# -gt 0 && ! $1 =~ ^- ]]; do
                files+=("$1")
                shift
            done
            ;;
        *)
            echo "Error: Unknown option $1"
            echo "Usage: ./deploy.sh -m \"Your commit message\" [-f file1 file2 ...]"
            exit 1
            ;;
    esac
done

# Check if commit message is provided
if [ -z "$commit_message" ]; then
    echo "Error: Please provide a commit message using -m"
    echo "Usage: ./deploy.sh -m \"Your commit message\" [-f file1 file2 ...]"
    exit 1
fi

# Git operations
if [ ${#files[@]} -eq 0 ]; then
    # If no files specified, add all changes
    echo "Adding all changes..."
    git add .
else
    # Add specified files
    echo "Adding the following files:"
    for file in "${files[@]}"; do
        echo "- $file"
    done
    git add "${files[@]}"
fi

echo "Committing changes with message: $commit_message"
git commit -m "$commit_message"

echo "Pushing to main branch..."
git push origin main

# Vercel deployment
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment process completed!" 
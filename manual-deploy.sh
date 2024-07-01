#!/bin/bash

echo "Building the project..."
pnpm run build
if [ $? -ne 0 ]; then
  echo "Build failed. Aborting deployment."
  exit 1
fi

branch_name=gh-pages

echo "Checking if local branch named $branch_name already exists..."
if git show-ref --verify --quiet refs/heads/$branch_name; then
  echo "[LOCAL] Branch '$branch_name' already exists locally."
  git branch -D $branch_name
else
  echo "[LOCAL] Branch '$branch_name' doesn't exist and will be created."
fi

echo "Checking if remote branch named $branch_name already exists..."
if git ls-remote --heads origin $branch_name | grep -sw "$branch_name"; then
  echo "[REMOTE] Branch '$branch_name' already exists on remote repository."
  git push origin --delete $branch_name
  if [ $? -eq 0 ]; then
    echo "[REMOTE] Branch '$branch_name' has been deleted from the remote repository."
  else
    echo "[REMOTE] Failed to delete branch '$branch_name' from the remote repository."
    exit 1
  fi
else
  echo "[REMOTE] Branch '$branch_name' doesn't exist and will be created."
fi

echo "Creating and switching to new branch '$branch_name'..."
git switch -c $branch_name

echo "Removing all files in the new branch..."
git rm -rf .

echo -e "node_modules\ndist/" >> .gitignore
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages $(date +%Y-%m-%d)"

echo "Pushing branch '$branch_name' to remote repository..."
git push --set-upstream origin $branch_name

echo "Branch '$branch_name' created and pushed successfully."

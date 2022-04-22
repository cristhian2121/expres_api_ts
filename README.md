#### extensions
Add configurations


git remote -v
git remote set-url origin git@github.com:cristhian2121/expres_api_ts.git

Add tags:

git tag -a v0.1 -m "fist part of the project" 258bdfa
git push origin --tags

Remove tag
git tag
git tag -d tagName
git push origin --tags :refs/tags/tagName

Git visual
gitk

### Create migrations
Where 001 is consecutive of migrations
yarn run typeorm:generate ./src/db/migrations/001  
### Run migrations
npx typeorm-ts-node-commonjs migration:run
### Revert migration
typeorm migration:revert
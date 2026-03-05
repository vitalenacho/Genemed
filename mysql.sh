# docker pull mysql:8.0
# # start container if not already running
# if (! (docker ps | grep mysql > /dev/null 2>&1)) ; then
#   docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=ipsx4w -d mysql:8.0
# fi

# ensure environment matches credentials
export MYSQL_HOST=localhost
export MYSQL_PORT=3306
export MYSQL_USERNAME=root
export MYSQL_PASSWORD=ipsx4w
# the name of the database we will create and use – set this to whatever
# schema you want Prisma migrations to run against.
export MYSQL_DATABASE=genemed
export MYSQL_URL=mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}

# generate prisma client for MySQL
npm run build:prisma

# create database / users (root already exists)
npm run schema:mysql root

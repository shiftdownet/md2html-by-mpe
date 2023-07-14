
node --experimental-sea-config sea-config.json 

for /F "tokens=*" %%n IN ('where.exe node') DO @(copy "%%n" hello.exe) 

@rem signtool remove /s hello.exe 

npx postject hello.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 

@rem signtool sign /fd SHA256 hello.exe 

pause
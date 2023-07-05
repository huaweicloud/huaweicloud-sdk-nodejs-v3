#bin/bash
echo "build core start"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-core.json" "${GITHUB_WORKSPACE}/core/package.json"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/tsconfig-core.json" "${GITHUB_WORKSPACE}/core/tsconfig.json"
# cd "${GITHUB_WORKSPACE}/core" || exit 1
ls -al "${GITHUB_WORKSPACE}/core"
cd "${GITHUB_WORKSPACE}/core"
npm install 

echo "tsc start"
tsc
echo "tsc end" 
echo "ls -al build/core"

ls -al "${GITHUB_WORKSPACE}/build/core"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-core.json" "${GITHUB_WORKSPACE}/build/core/package.json"
cat "${GITHUB_WORKSPACE}/build/core/package.json"

echo "build core end"

echo "build services start"

cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-service.json" "${GITHUB_WORKSPACE}/services/package.json"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/tsconfig-service.json" "${GITHUB_WORKSPACE}/services/tsconfig.json"
# cd "${GITHUB_WORKSPACE}/core" || exit 1
ls -al "${GITHUB_WORKSPACE}/services"
cd "${GITHUB_WORKSPACE}/services"
npm install 

cp -r "${GITHUB_WORKSPACE}/build/core" "${GITHUB_WORKSPACE}/services/node_modules/@huaweicloud/huaweicloud-sdk-core"

for service in `ls ${GITHUB_WORKSPACE}/services`
    do
    cd "${GITHUB_WORKSPACE}/services/${service}" || exit 1
    # get the first version
    first=true
    for version in `ls`
    do
        # do something
        if test -d "${version}"
        then
        if ${first}; then
            echo "export * from './${version}/public-api';" >> "huaweicloud-sdk-${service}.ts"
            first=false
        fi

        echo "export * as ${version} from './${version}/public-api';" >> "huaweicloud-sdk-${service}.ts"
        fi
    done
done 
tsc
echo "build services end"
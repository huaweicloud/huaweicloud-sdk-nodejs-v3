#bin/bash
echo "build core start"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-core.json" "${GITHUB_WORKSPACE}/core/package.json"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/tsconfig-core.json" "${GITHUB_WORKSPACE}/core/tsconfig.json"
# Update core package.json
sed -i "s/PRODUCT_VERSION/$PUB_VERSION/g" "${GITHUB_WORKSPACE}/core/package.json"
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

# Update core package.json
sed -i "s/PRODUCT_VERSION/$PUB_VERSION/g" "${GITHUB_WORKSPACE}/build/core/package.json"

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

tsc
echo "build services end"

set -x
ls -al "${GITHUB_WORKSPACE}/build/services"
set +x
 
for service in "ls ${GITHUB_WORKSPACE}/build/services"
do
    cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-service.json" "${GITHUB_WORKSPACE}/build/services/package.json"
    sed -i "s/PRODUCT_VERSION/$PUB_VERSION/g" "${GITHUB_WORKSPACE}/build/services/${service}/package.json"
    sed -i "s/PRODUCT/$service/g" "${GITHUB_WORKSPACE}/build/services/${service}/package.json"
done 

# echo ecs package.json
cat "${GITHUB_WORKSPACE}/build/services/ecs/package.json"
#bin/bash
echo "build package"
cp -r "${GITHUB_WORKSPACE}/.github/workflows/package-core.json" "${GITHUB_WORKSPACE}/core/package.json"

# cd "${GITHUB_WORKSPACE}/core" || exit 1
ls -al "${GITHUB_WORKSPACE}/core"
# for service in `ls "${GITHUB_WORKSPACE}/services`
#     do
#     cd "${GITHUB_WORKSPACE}/services/${service}" || exit 1
#     # get the first version
#     first=true
#     for version in `ls`
#     do
#         # do something
#         if test -d "${version}"
#         then
#         if ${first}; then
#             echo "export * from './${version}/public-api';" >> "huaweicloud-sdk-${service}.ts"
#             first=false
#         fi

#         echo "export * as ${version} from './${version}/public-api';" >> "huaweicloud-sdk-${service}.ts"
#         fi
#     done
# done
# cd "${GITHUB_WORKSPACE}" || exit 1
# tsc
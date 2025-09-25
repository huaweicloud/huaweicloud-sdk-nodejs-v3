

export class ModifyHotfixesRequestBody {
    public hotfixes?: object;
    public constructor(hotfixes?: object) { 
        this['hotfixes'] = hotfixes;
    }
    public withHotfixes(hotfixes: object): ModifyHotfixesRequestBody {
        this['hotfixes'] = hotfixes;
        return this;
    }
}
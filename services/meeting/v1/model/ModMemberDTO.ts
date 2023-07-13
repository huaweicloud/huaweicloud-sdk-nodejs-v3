

export class ModMemberDTO {
    public name: string;
    public englishName?: string;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): ModMemberDTO {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): ModMemberDTO {
        this['englishName'] = englishName;
        return this;
    }
    public withSignature(signature: string): ModMemberDTO {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): ModMemberDTO {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): ModMemberDTO {
        this['desc'] = desc;
        return this;
    }
}
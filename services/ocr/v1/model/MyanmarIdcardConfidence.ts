

export class MyanmarIdcardConfidence {
    private 'nrc_id'?: number;
    private 'issue_date'?: number;
    public name?: number;
    public birth?: number;
    private 'bloodlines_religion'?: number;
    public height?: number;
    private 'blood_group'?: number;
    private 'card_id'?: number;
    private 'nrc_id_back'?: number;
    public profession?: number;
    public address?: number;
    public constructor() { 
    }
    public withNrcId(nrcId: number): MyanmarIdcardConfidence {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: number  | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId(): number | undefined {
        return this['nrc_id'];
    }
    public withIssueDate(issueDate: number): MyanmarIdcardConfidence {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: number  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): number | undefined {
        return this['issue_date'];
    }
    public withName(name: number): MyanmarIdcardConfidence {
        this['name'] = name;
        return this;
    }
    public withBirth(birth: number): MyanmarIdcardConfidence {
        this['birth'] = birth;
        return this;
    }
    public withBloodlinesReligion(bloodlinesReligion: number): MyanmarIdcardConfidence {
        this['bloodlines_religion'] = bloodlinesReligion;
        return this;
    }
    public set bloodlinesReligion(bloodlinesReligion: number  | undefined) {
        this['bloodlines_religion'] = bloodlinesReligion;
    }
    public get bloodlinesReligion(): number | undefined {
        return this['bloodlines_religion'];
    }
    public withHeight(height: number): MyanmarIdcardConfidence {
        this['height'] = height;
        return this;
    }
    public withBloodGroup(bloodGroup: number): MyanmarIdcardConfidence {
        this['blood_group'] = bloodGroup;
        return this;
    }
    public set bloodGroup(bloodGroup: number  | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup(): number | undefined {
        return this['blood_group'];
    }
    public withCardId(cardId: number): MyanmarIdcardConfidence {
        this['card_id'] = cardId;
        return this;
    }
    public set cardId(cardId: number  | undefined) {
        this['card_id'] = cardId;
    }
    public get cardId(): number | undefined {
        return this['card_id'];
    }
    public withNrcIdBack(nrcIdBack: number): MyanmarIdcardConfidence {
        this['nrc_id_back'] = nrcIdBack;
        return this;
    }
    public set nrcIdBack(nrcIdBack: number  | undefined) {
        this['nrc_id_back'] = nrcIdBack;
    }
    public get nrcIdBack(): number | undefined {
        return this['nrc_id_back'];
    }
    public withProfession(profession: number): MyanmarIdcardConfidence {
        this['profession'] = profession;
        return this;
    }
    public withAddress(address: number): MyanmarIdcardConfidence {
        this['address'] = address;
        return this;
    }
}
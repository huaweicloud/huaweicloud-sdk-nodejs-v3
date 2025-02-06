import { AlternateIdentifierDto } from './AlternateIdentifierDto';


export class GetUserIdReqBody {
    private 'alternate_identifier'?: AlternateIdentifierDto;
    public constructor(alternateIdentifier?: AlternateIdentifierDto) { 
        this['alternate_identifier'] = alternateIdentifier;
    }
    public withAlternateIdentifier(alternateIdentifier: AlternateIdentifierDto): GetUserIdReqBody {
        this['alternate_identifier'] = alternateIdentifier;
        return this;
    }
    public set alternateIdentifier(alternateIdentifier: AlternateIdentifierDto  | undefined) {
        this['alternate_identifier'] = alternateIdentifier;
    }
    public get alternateIdentifier(): AlternateIdentifierDto | undefined {
        return this['alternate_identifier'];
    }
}
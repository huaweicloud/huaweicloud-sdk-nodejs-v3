import { UpdateAuthorisation } from './UpdateAuthorisation';


export class UpdateAuthorisationRequestBody {
    public authorisation?: UpdateAuthorisation;
    public constructor(authorisation?: UpdateAuthorisation) { 
        this['authorisation'] = authorisation;
    }
    public withAuthorisation(authorisation: UpdateAuthorisation): UpdateAuthorisationRequestBody {
        this['authorisation'] = authorisation;
        return this;
    }
}
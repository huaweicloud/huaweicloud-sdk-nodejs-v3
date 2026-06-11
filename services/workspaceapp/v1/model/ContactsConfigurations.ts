

export class ContactsConfigurations {
    private 'contacts_status'?: number;
    private 'contacts_redirection_type'?: number;
    private 'contacts_storage_path'?: string;
    private 'contacts_relative_path'?: string;
    private 'contacts_exclusive_rights'?: number;
    private 'contacts_move_contents'?: number;
    private 'contacts_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withContactsStatus(contactsStatus: number): ContactsConfigurations {
        this['contacts_status'] = contactsStatus;
        return this;
    }
    public set contactsStatus(contactsStatus: number  | undefined) {
        this['contacts_status'] = contactsStatus;
    }
    public get contactsStatus(): number | undefined {
        return this['contacts_status'];
    }
    public withContactsRedirectionType(contactsRedirectionType: number): ContactsConfigurations {
        this['contacts_redirection_type'] = contactsRedirectionType;
        return this;
    }
    public set contactsRedirectionType(contactsRedirectionType: number  | undefined) {
        this['contacts_redirection_type'] = contactsRedirectionType;
    }
    public get contactsRedirectionType(): number | undefined {
        return this['contacts_redirection_type'];
    }
    public withContactsStoragePath(contactsStoragePath: string): ContactsConfigurations {
        this['contacts_storage_path'] = contactsStoragePath;
        return this;
    }
    public set contactsStoragePath(contactsStoragePath: string  | undefined) {
        this['contacts_storage_path'] = contactsStoragePath;
    }
    public get contactsStoragePath(): string | undefined {
        return this['contacts_storage_path'];
    }
    public withContactsRelativePath(contactsRelativePath: string): ContactsConfigurations {
        this['contacts_relative_path'] = contactsRelativePath;
        return this;
    }
    public set contactsRelativePath(contactsRelativePath: string  | undefined) {
        this['contacts_relative_path'] = contactsRelativePath;
    }
    public get contactsRelativePath(): string | undefined {
        return this['contacts_relative_path'];
    }
    public withContactsExclusiveRights(contactsExclusiveRights: number): ContactsConfigurations {
        this['contacts_exclusive_rights'] = contactsExclusiveRights;
        return this;
    }
    public set contactsExclusiveRights(contactsExclusiveRights: number  | undefined) {
        this['contacts_exclusive_rights'] = contactsExclusiveRights;
    }
    public get contactsExclusiveRights(): number | undefined {
        return this['contacts_exclusive_rights'];
    }
    public withContactsMoveContents(contactsMoveContents: number): ContactsConfigurations {
        this['contacts_move_contents'] = contactsMoveContents;
        return this;
    }
    public set contactsMoveContents(contactsMoveContents: number  | undefined) {
        this['contacts_move_contents'] = contactsMoveContents;
    }
    public get contactsMoveContents(): number | undefined {
        return this['contacts_move_contents'];
    }
    public withContactsMoveContentOnPolicyRemoval(contactsMoveContentOnPolicyRemoval: number): ContactsConfigurations {
        this['contacts_move_content_on_policy_removal'] = contactsMoveContentOnPolicyRemoval;
        return this;
    }
    public set contactsMoveContentOnPolicyRemoval(contactsMoveContentOnPolicyRemoval: number  | undefined) {
        this['contacts_move_content_on_policy_removal'] = contactsMoveContentOnPolicyRemoval;
    }
    public get contactsMoveContentOnPolicyRemoval(): number | undefined {
        return this['contacts_move_content_on_policy_removal'];
    }
}
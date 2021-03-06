import { 
    IUpdate, 
    IGetUpdatesParams, 
    IResponse, 
    ISetWebhookParams, 
    IWebhookInfo, 
    IUser, 
    IMessage, 
    ISendMessageParams,
    IForwardMessageParams,
    ISendPhotoParams,
    ISendAudioParams
} from "./types.ts";

// Vanilla Tegelram
class Tegelram {

    private botToken: string;

    public constructor(botTokenIn: string) {
        this.botToken = botTokenIn;
    }

    // making requests
    private async makeRequest<T>(methodName: string, methodData?: any): Promise<IResponse<T>> {
        const URL = `https://api.telegram.org/bot${this.botToken}/${methodName}`;
        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(methodData)
        });
        return response.json() as Promise<IResponse<T>>;
    }

    public async getUpdates(getUpdateParams: IGetUpdatesParams): Promise<IResponse<IUpdate[]>> {
        const result: IResponse<IUpdate[]> = await this.makeRequest<IUpdate[]>("getUpdates", getUpdateParams) as IResponse<IUpdate[]>;
        return result;

        // TODO: Try the following
        // return await this.makeRequest<IUpdate[]>("getUpdates", getUpdateParams) as IResponse<IUpdate[]>;
    }
    public async setWebhook(setWebhookParams: ISetWebhookParams): Promise<IResponse<any>> {
        const result: IResponse<any> = await this.makeRequest<any>("setWebhook", setWebhookParams) as IResponse<IUpdate[]>;
        return result;
    }
    public async deleteWebhook(): Promise<IResponse<any>> {
        const result: IResponse<any> = await this.makeRequest<any>("deleteWebhook");
        return result;
    }
    public async getWebhookInfo(): Promise<IResponse<IWebhookInfo>> {
        const result: IResponse<IWebhookInfo> = await this.makeRequest<IWebhookInfo>("getWebhookInfo") as IResponse<IWebhookInfo>;
        return result;
    }

    // available methods
    public async getMe(): Promise<IResponse<IUser>> {
        const result: IResponse<IUser> = await this.makeRequest<IUser>("getMe") as IResponse<IUser>;
        return result;
    }
    public async sendMessage(sendMessageParams: ISendMessageParams): Promise<IResponse<IMessage>> {
        const result: IResponse<IMessage> = await this.makeRequest<IMessage>("sendMessage", sendMessageParams) as IResponse<IMessage>;
        return result;
    }
    public async forwardMessage(forwardMessageParams: IForwardMessageParams) {
        const result: IResponse<IMessage> = await this.makeRequest<IMessage>("forwardMessage", forwardMessageParams) as IResponse<IMessage>;
        return result;
    }
    public async sendPhoto(sendPhotoParamas: ISendPhotoParams) {
        const result: IResponse<IMessage> = await this.makeRequest<IMessage>("sendPhoto", sendPhotoParamas) as IResponse<IMessage>;
        return result;
    }
    public async sendAudio(sendAudioParams: ISendAudioParams) {
        const result: IResponse<IMessage> = await this.makeRequest<IMessage>("sendAudio", sendAudioParams) as IResponse<IMessage>;
        return result;
    }
    public async sendDocument() {
        
    }
    public async sendVideo() {
        
    }
    public async sendAnimation() {
        
    }
    public async sendVoice() {
        
    }
    public async sendVoiceNote() {
        
    }
    public async sendMediaGroup() {
        
    }
    public async sendLocation() {
        
    }
    public async editMessageLiveLocation() {
        
    }
    public async stopMessageLiveLocation() {

    }
    public async sendVenue() {

    }
    public async sendContact() {

    }
    public async sendPoll() {

    }
    public async sendDice() {

    }
    public async sendChatAction() {

    }
    public async getUserProfilePhotos() {

    }
    public async getFile() {

    }
    public async kickChatMember() {

    }
    public async unbanChatMember() {

    }
    public async restrictChatMember() {

    }
    public async promoteChatMember() {

    }
    public async setChatAdministratorCustomTitle() {

    }
    public async setChatPermissions() {

    }
    public async exportChatInviteLink() {

    }
    public async setChatPhoto() {

    }
    public async deleteChatPhoto() {

    }
    public async setChatTitle() {

    }
    public async setChatDescription() {

    }
    public async pinChatMessage() {

    }
    public async unpinChatMessage() {

    }
    public async leaveChat() {

    }
    public async getChat() {

    }
    public async getChatAdministrators() {

    }
    public async getChatMembersCount() {

    }
    public async getChatMember() {

    }
    public async setChatStickerSet() {

    }
    public async deleteChatStickerSet() {

    }
    public async answerCallbackQuery() {

    }
    public async setMyCommands() {

    }
    public async getMyCommands() {

    }
    public async editMessageText() {

    }
    public async editMessageCaption() {

    }
    public async editMessageMedia() {

    }
    public async editMessageReplyMarkup() {

    }
    public async stopPoll() {

    }
    public async deleteMessage() {

    }
    
    // stickers
    public async sendSticker() {
        
    }
    public async getStickerSet() {
        
    }
    public async uploadStickerFile() {
        
    }
    public async createNewStickerSet() {
        
    }
    public async addStickerToSet() {
        
    }
    public async setStickerPositionInSet() {
        
    }
    public async deleteStickerFromSet() {
        
    }
    public async setStickerSetThumb() {
        
    }

    // inline mode
    
}

export { Tegelram };
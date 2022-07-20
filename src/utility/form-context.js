import * as React from "react";

const FormStateContext = React.createContext();
const FormDispatchContext = React.createContext();

const initialState = {
    SMSCampaign: {
        values: { CampaignName: '', CampaignCTA: { label: '', value: '' }, CampaignLandingPageURL: '', CampaignCaption: '', CampaignScheduleDate: '' },
        errors: {}
    },
    EmailCampaign: {
        values: { CampaignName: '', CampaignSubject: '', CampaignBody: '', CampaignLandingPageURL: '', CampaignCaption: '', CampaignScheduleDate: '' },
        errors: {}
    },
    FacebookCampaign: {
        values: { image: '', isStudioCampaing: false, CampaignName: '', CampaignCTA: { label: '', value: '' }, CampaignLandingPageURL: '', CampaignCaption: '' },
        errors: {}
    },
    InstagramCampaign: {
        values: { image: '', isStudioCampaing: false, CampaignName: '', CampaignCTA: { label: '', value: '' }, CampaignLandingPageURL: '', CampaignCaption: '' },
        errors: {}
    },
    WhatsAppCampaign: {
        values: { image: '', isStudioCampaing: false, CampaignName: '', CampaignCTA: { label: '', value: '' }, CampaignLandingPageURL: '', CampaignCaption: '' },
        errors: {}
    },
};

const formReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case "SET_FORM":
            return {
                ...state,
                [payload.id]: payload.data
            };
        case "UPDATE_FORM":
            return {
                ...state,
                [payload.id]: {
                    ...payload.data
                }
            };
        case "UPDATE_VALUES":
            return {
                ...state,
                [payload.id]: {
                    values: {
                        ...payload.data
                    }
                }
            };
        case "UPDATE_ERRORS":
            return {
                ...state,
                [payload.id]: {
                    errors: {
                        ...payload.data
                    }
                }
            };
        default:
            return state;
    }
};

const FormProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(formReducer, initialState);

    return (
        <FormStateContext.Provider value={state}>
            <FormDispatchContext.Provider value={dispatch}>
                {children}
            </FormDispatchContext.Provider>
        </FormStateContext.Provider>
    );
};

const useFormState = id => {
    const formState = React.useContext(FormStateContext);

    if (formState === undefined) {
        throw new Error('useFormState must be used within a FormProvider"');
    }

    return formState[id];
};

const useFormDispatch = () => {
    const dispatch = React.useContext(FormDispatchContext);

    if (dispatch === undefined) {
        throw new Error('useFormState must be used within a FormProvider"');
    }

    return dispatch;
};

export { FormProvider, useFormState, useFormDispatch };
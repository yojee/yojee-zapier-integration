module.exports = {
  type: 'custom',
  test: {
    url: '{{process.env.YOJEE_API_URL}}/api/v3/dispatcher/webhooks?page=1&page_size=10&order=asc',
    method: 'GET',
    params: {},
    headers: {
      ACCESS_TOKEN: '{{bundle.authData.access_token}}',
      COMPANY_SLUG: '{{bundle.authData.company_slug}}',
    },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'access_token',
      required: true,
      label: 'Access Token',
    },
    {
      computed: false,
      key: 'company_slug',
      required: true,
      label: 'Company Slug',
    },
  ],
  customConfig: {},
  connectionLabel: '',
};

// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(serviceName, rolloutId) {
  // [START servicemanagement_v1_generated_ServiceManager_GetServiceRollout_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service.  See the overview (/service-management/overview)
   *  for naming requirements.  For example: `example.googleapis.com`.
   */
  // const serviceName = 'abc123'
  /**
   *  Required. The id of the rollout resource.
   */
  // const rolloutId = 'abc123'

  // Imports the Servicemanagement library
  const {ServiceManagerClient} = require('@google-cloud/service-management').v1;

  // Instantiates a client
  const servicemanagementClient = new ServiceManagerClient();

  async function callGetServiceRollout() {
    // Construct request
    const request = {
      serviceName,
      rolloutId,
    };

    // Run request
    const response = await servicemanagementClient.getServiceRollout(request);
    console.log(response);
  }

  callGetServiceRollout();
  // [END servicemanagement_v1_generated_ServiceManager_GetServiceRollout_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

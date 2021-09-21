// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(serviceName, configSource) {
  // [START servicemanagement_submit_config_source_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service.  See the [overview](https://cloud.google.com/service-management/overview)
   *  for naming requirements.  For example: `example.googleapis.com`.
   */
  // const serviceName = 'abc123'
  /**
   *  Required. The source configuration for the service.
   */
  // const configSource = ''
  /**
   *  Optional. If set, this will result in the generation of a
   *  `google.api.Service` configuration based on the `ConfigSource` provided,
   *  but the generated config and the sources will NOT be persisted.
   */
  // const validateOnly = true

  // Imports the Servicemanagement library
  const {ServiceManagerClient} = require('@google-cloud/service-management').v1;

  // Instantiates a client
  const servicemanagementClient = new ServiceManagerClient();

  async function submitConfigSource() {
    // Construct request
    const request = {
      serviceName,
      configSource,
    };

    // Run request
    const [operation] = await servicemanagementClient.submitConfigSource(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  submitConfigSource();
  // [END servicemanagement_submit_config_source_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

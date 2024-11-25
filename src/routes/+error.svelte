<script>
  import { page } from '$app/stores';

  const responses = new Map([
    [400, 'The server received a bad request'],
    [401, 'You are not allowed to view this resource'],
    [403, 'You are not allowed to view this resource'],
    [404, 'The requested resource does not exist'],
    [405, 'Method not supported by the target source'],
    [403, 'Access to the resource is forbidden'],
    [406, 'The requested resource is not acceptable'],
    [407, 'Proxy authentication is required'],
    [408, 'The server timed out waiting for the request'],
    [409, 'A conflict occurred with the current state of the resource'],
    [410, 'The resource is no longer available and has been permanently removed'],
    [411, 'The server requires a valid Content-Length header'],
    [412, 'The precondition given in the request failed'],
    [413, 'The payload of the request is too large'],
    [414, 'The requested URI is too long to be processed'],
    [415, 'The media type of the request is unsupported'],
    [416, 'The range specified in the request is invalid'],
    [417, 'The server cannot meet the requirements of the Expect header'],
    [418, "I'm a teapot. This code is used in jest (RFC 2324)"],
    [429, 'Too many requests have been sent in a given time frame'],
    [500, 'The server encountered an internal error'],
    [501, 'The server does not support the functionality required to fulfill the request'],
    [502, 'The server received an invalid response from an upstream server'],
    [503, 'The server is currently unavailable'],
    [504, 'The server did not receive a timely response from an upstream server'],
    [505, 'The HTTP version used in the request is not supported']
  ]);
</script>

<svelte:head>
  <title>Error: {$page.status}</title>
</svelte:head>

<div class="text-center absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
  <h1 class="text-[200px] leading-none font-extrabold text-accent">{$page.status}</h1>
  <h2 class="2xl font-bold text-primary">{responses.get($page.status)}</h2>
</div>

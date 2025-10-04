
export default function Checkout() {
    return (
        <div className='flex  w-auto justify-between mt-10'>
            <div className='flex-col  w-full p-10'>
                <h1 className='font-bold text-xl'>Contact</h1>
                
                <div>
                    <h2 className="text-base/7 font-semibold text-black">Personal Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm/6 font-medium text-black">First name</label>
                            <div className="mt-2">
                                <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm/6 font-medium text-black">Last name</label>
                            <div className="mt-2">
                                <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label className="block text-sm/6 font-medium text-black">Email address</label>
                            <div className="mt-2">
                                <input id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm/6 font-medium text-black">Country</label>
                            <div className="mt-2 grid grid-cols-1">
                                <select id="country" name="country" autoComplete="country-name" className=" col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 *:bg-white focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm/6 font-medium text-black">Street address</label>
                            <div className="mt-2">
                                <input id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label className="block text-sm/6 font-medium text-black">City</label>
                            <div className="mt-2">
                                <input id="city" type="text" name="city" autoComplete="address-level2" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm/6 font-medium text-black">State / Province</label>
                            <div className="mt-2">
                                <input id="region" type="text" name="region" autoComplete="address-level1" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm/6 font-medium text-black">ZIP / Postal code</label>
                            <div className="mt-2">
                                <input id="postal-code" type="text" name="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-800/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <h1 className='font-bold text-xl mt-5'>Shipping Method</h1>
                    <fieldset>
                        <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
                        <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="push-everything" type="radio" name="push-notifications" checked className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">Everything</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="push-email" type="radio" name="push-notifications" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">Same as email</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="push-nothing" type="radio" name="push-notifications" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">No push notifications</label>
                            </div>
                        </div>
                    </fieldset>
                    <h1 className='font-bold text-xl mt-5'>Payment Method</h1>
                    <fieldset>
                        <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
                        <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="push-everything" type="radio" name="push-notifications" checked className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">Everything</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="push-email" type="radio" name="push-notifications" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">Same as email</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="push-nothing" type="radio" name="push-notifications" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                                <label className="block text-sm/6 font-medium text-gray-900">No push notifications</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                    
                

            </div>
            <div className='h-auto bg-gray-400 w-full '>RightSide</div>
        </div>
    )
}


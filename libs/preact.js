
/**
 * Run `npm run build:libs:preact` for one optimized Preact bundle that suits all the app's needs.
 * This is necessary because if we would import the module versions of those packages on the fly, the conflicting Preact versions would throw a cryptic error:
 * "Cannot read properties of null (reading '__H')"
 */
import { h, render, Component } from 'preact';
// import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
// import Router, { route } from 'preact-router';
// import { Link } from 'preact-router/match';

export {
    h, render, Component,
    //useCallback, useEffect, useRef, useState,
    //Router, route, Link
};
import axios from "axios";
import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

export default {
  getSiteProps: () => ({
    title: "hipwerk.com"
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/about",
        component: "src/containers/About"
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getProps: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getProps: () => ({
            post
          })
        }))
      }
    ];
  },
  Html: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children } = this.props;

      const sheet = new ServerStyleSheet();
      const newChildren = sheet.collectStyles(children);
      const styleTags = sheet.getStyleElement();

      return (
        <Html>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      );
    }
  }
};

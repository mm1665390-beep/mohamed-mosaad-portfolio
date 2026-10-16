# GitHub profile setup (manual steps)

None of this was done automatically: no GitHub write access was used. Everything below is
something you run or click yourself.

## 1. Profile README

A profile README lives in a public repo named exactly like your username.

```bash
mkdir mm1665390-beep && cd mm1665390-beep
git init -b main
cp ../portfolio/github-profile/README.md ./README.md
git add README.md
git commit -m "Add profile README"
git remote add origin https://github.com/mm1665390-beep/mm1665390-beep.git
git push -u origin main
```

Create the empty public repo `mm1665390-beep/mm1665390-beep` on github.com first.

## 2. Repository descriptions and topics (Settings gear next to "About")

Your repos currently show "No description, website, or topics provided."

| Repository | Suggested description | Topics |
| --- | --- | --- |
| `mm1665390-beep/E-Commerce-` | Flutter e-commerce app with authentication, product browsing and search, cart and checkout. In development. | `flutter` `dart` `e-commerce` `mobile-app` |
| `FAD-Community/fad-team05-HandMade-App` | Team Flutter app (FAD Community, Team 05). | `flutter` `dart` `bloc` `firebase` |
| `FAD-Community/Team-2--R1_P2` | Team Flutter app (FAD Community, Team 2). | `flutter` `dart` `bloc` |

The two FAD repos belong to the organisation, so only an org admin can edit them.

## 3. Housekeeping worth considering

- **E-Commerce- README:** the clone step is missing, and "Wishlist" and "Order Tracking" are
  marked optional. Remove features that are not built, so it matches the app.
- **E-Commerce- name:** the trailing hyphen is easy to mistype in links. Renaming (Settings →
  General) is optional; GitHub redirects old links, but update the portfolio's `repo` URL in
  `src/data/projects.ts` if you do.
- **Team repos:** the READMEs are still the default Flutter template. Asking your team to add a
  real description and screenshots would improve how they look to visitors.
- **Pinned repositories:** pin `E-Commerce-` and `MohamedMosaad_Flutter_CV`, and consider whether
  `test_firebase` should stay public.
- **Profile bio:** already good ("Flutter Developer, Computer Science Student"). Add the
  portfolio URL in the profile's Website field once deployed.
